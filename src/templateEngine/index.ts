type TemplateEngineData = {
  [key: string]: string | number | boolean;
};

type TemplateEngine = (template: string, data: TemplateEngineData) => string;

export const getByPath = (obj: any, path: string) =>
  path.split(".").reduce((acc, key) => acc && acc[key], obj);

export const templateEngine: TemplateEngine = (
  template,
  data,
  delimiterStart = "{{",
  delimiterEnd = "}}"
) =>
  [
    ...template.matchAll(
      new RegExp(`${delimiterStart}([^${delimiterEnd}]+)?${delimiterEnd}`, "g")
    ),
  ].reduce((acc, [found, key]) => {
    return found && data[key] ? acc.replace(found, `${data[key]}`) : acc;
  }, template);
