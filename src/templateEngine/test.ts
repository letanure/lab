import { getByPath, templateEngine } from ".";

describe("getByPath", () => {
  it("shoud return 1st level", () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };
    expect(getByPath(obj, "a")).toBe(1);
  });

  it("shoud return 2nd level", () => {
    const obj = {
      a: {
        b: 1,
      },
    };
    expect(getByPath(obj, "a.b")).toBe(1);
  });

  it("shoud return 3rd level", () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
      },
    };
    expect(getByPath(obj, "a.b.c")).toBe(1);
  });

  it("shoud return object", () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
      },
    };
    expect(getByPath(obj, "a.b")).toEqual({ c: 1 });
  });

  it("sould return undefined", () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
      },
    };
    expect(getByPath(obj, "a.b.c.d")).toBeUndefined();
  });

  it("sould return undefined", () => {
    const obj = {
      a: {
        b: {
          c: 1,
        },
      },
    };
    expect(getByPath(obj, "a.b.c.d.e")).toBeUndefined();
  });
});

describe("templateEngine", () => {
  it("should return a string", () => {
    const template = "Hello {{name}}";
    const data = { name: "Luiz" };
    expect(typeof templateEngine(template, data)).toBe("string");
  });

  it("should return a string with the correct value", () => {
    const template = "Hello {{name}}";
    const data = { name: "Luiz" };
    expect(templateEngine(template, data)).toBe("Hello Luiz");
  });

  it("should return replace all occurences", () => {
    const template = "Hello {{name}}, my name is {{name}} too";
    const data = { name: "Luiz" };
    expect(templateEngine(template, data)).toBe(
      "Hello Luiz, my name is Luiz too"
    );
  });

  it("should return replace all occurences with multiple values", () => {
    const template = "Hello {{name}}, my age is {{age}}";
    const data = { name: "Luiz", age: "40" };
    expect(templateEngine(template, data)).toBe("Hello Luiz, my age is 40");
  });

  it("should not replace a inexistent value", () => {
    const template = "Hello {{name}}, my age is {{age}}!";
    const data = { name: "Luiz" };
    expect(templateEngine(template, data)).toBe(
      "Hello Luiz, my age is {{age}}!"
    );
  });

  it("should not break with a extra value", () => {
    const template = "Hello {{name}}, my age is {{age}}!";
    const data = { name: "Luiz", age: "40", city: "berlin" };
    expect(templateEngine(template, data)).toBe("Hello Luiz, my age is 40!");
  });

  it("should not break with boolean value", () => {
    const template = "Hello {{name}}, Im a developer? {{isDeveloper}}!";
    const data = { name: "Luiz", isDeveloper: "true" };
    expect(templateEngine(template, data)).toBe(
      "Hello Luiz, Im a developer? true!"
    );
  });

  it("should work with template literals multiline", () => {
    const template = "Hello {{name}}, my age is {{age}}!";
    const data = {
      name: `Luiz
        Tanure`,
      age: "40",
      city: "berlin",
    };
    expect(templateEngine(template, data)).toBe(`Hello Luiz
        Tanure, my age is 40!`);
  });

  it("should return work with different delimiters", () => {
    const template = "Hello <%name%>";
    const data = { name: "Luiz" };
    expect(templateEngine(template, data, "<%", "%>")).toBe("Hello Luiz");
  });
});
