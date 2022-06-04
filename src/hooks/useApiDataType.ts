import xml2js from 'xml2js';

const useApiDataType = () => {
  const handleXmlChange = (xml: any) => {
    let newData;

    new xml2js.Parser().parseString(xml, (err, result) => {
      const changeValue = result.dbs.db.map((item: any) => {
        const keys = Object.keys(item);

        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          const value = item[key];

          item[key] = String(value);
        }

        return item;
      });

      newData = changeValue;
    });

    return newData;
  };

  const boxOfficeXmlChange = (xml: any) => {
    let newData;

    new xml2js.Parser().parseString(xml, (err, result) => {
      const changeValue = result.boxofs.boxof.map((item: any) => {
        const keys = Object.keys(item);

        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          const value = item[key];

          item[key] = String(value);
        }

        return item;
      });

      newData = changeValue;
    });

    return newData;
  };

  return { handleXmlChange, boxOfficeXmlChange };
};

export default useApiDataType;
