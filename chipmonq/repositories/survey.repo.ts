export interface Survey {
  guid: string;
  title: string;
}

export function getSurveys(): Survey[] {
  return [
    {
      guid: "survey1",
      title: "Survey 1",
    },
    {
      guid: "survey1",
      title: "Survey 1",
    },
  ];
}
