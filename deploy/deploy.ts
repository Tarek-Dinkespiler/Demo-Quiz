import { App, CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import {
  Architecture,
  Code,
  LayerVersion,
  Runtime,
} from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "RestAPI", {
      restApiName: "RestAPI",
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      },
    });

    const dependencies = new LayerVersion(this, "lib", {
      layerVersionName: "lib",
      compatibleRuntimes: [Runtime.NODEJS_20_X],
      code: Code.fromAsset("./src/layer/runtime_dependencies"),
      compatibleArchitectures: [Architecture.ARM_64],
    });

    const apiLambda = new NodejsFunction(this, "Handler", {
      runtime: Runtime.NODEJS_20_X,
      handler: "handler",
      entry: "./src/lambda/index.ts",
      timeout: Duration.seconds(15),
      memorySize: 128,
      layers: [dependencies],
      bundling: {
        minify: false,
        sourceMap: true,
        externalModules: ["express", "serverless"],
      },
    });

    const apiIntegration = new LambdaIntegration(apiLambda);
    api.root.addMethod("GET", apiIntegration);

    // When using express, the following should NOT be necessary
    //
    // const famousQuotes = api.root.addResource("famous-quotes");
    // famousQuotes.addMethod("GET", apiIntegration);

    new CfnOutput(this, "API URL", {
      value: api.urlForPath(),
    });
  }
}

const app = new App();
new MyStack(app, "MyStack");
