interface IResultInterface {
  word: string;
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: string;
    }
  ];
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          synonyms: string[];
          antonyms: string[];
        }
      ];
    }
  ];
}

export type { IResultInterface };
