declare interface IEmailStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'emailStrings' {
  const strings: IEmailStrings;
  export = strings;
}
