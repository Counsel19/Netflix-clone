import selectionFilter from "../../utils/selection-filter";

test("selectionFilter with Legitimate data", () => {
  const series = [
    {
      genre: "documentaries",
      maturity: "18",
      slug: "tiger-king",
      description: "Tiger King description",
      id: "07adcf19-517f-41b4-8f8b-04fee694bce1",
      title: "Tiger King",
      docId: "IcRxJBanzE7nmIp2GMGb",
    },
  ];

  const films = [
    {
      id: 'film-1x',
      title: 'The Prestige',
      description: 'Great film...',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
  ];

  const slides = selectionFilter({ series, films });
  expect(slides.series[0].title).toBe("Documentaries");
  expect(slides.series[0].data[0].description).toBe("Tiger King description");
  expect(slides.series[0].data[0].genre).toBe("documentaries");
  expect(slides.series[0].data[0].maturity).toBe("18");
  expect(slides.series[0].data[0].slug).toBe("tiger-king");

  expect(slides.films[0].title).toBe("Drama");
  expect(slides.films[0].data[0].description).toBe("Great film...");
  expect(slides.films[0].data[0].genre).toBe("drama");
  expect(slides.films[0].data[0].maturity).toBe("15");
  expect(slides.films[0].data[0].slug).toBe("the-prestige");

  
});
