exports.handler = async (event: object) => {
  console.log("request:", JSON.stringify(event, undefined, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello world" }),
  };
};

export const add = (a: number, b: number) => a + b;

export const formatDisplay = (v: string | number) => `\n\n\n\n\n${v}\n\n\n\n\n`;

const display = (v: string | number | object) => {
  v = typeof v === "object" ? JSON.stringify(v) : v;
  console.log(formatDisplay(v));
};

display("HELLO !");
const sum = add(1, 2);
display({ sum });
