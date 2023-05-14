export const totalPopulationApiFixture = {
  label: "総人口",
  data: [
    {
      year: 1980,
      value: 12817,
    },
    {
      year: 1985,
      value: 12707,
    },
    {
      year: 1990,
      value: 12571,
    },
    {
      year: 1995,
      value: 12602,
    },
    {
      year: 2000,
      value: 12199,
    },
    {
      year: 2005,
      value: 11518,
    },
    {
      year: 2010,
      value: 10888,
    },
    {
      year: 2015,
      value: 10133,
    },
    {
      year: 2020,
      value: 9302,
    },
    {
      year: 2025,
      value: 8431,
    },
    {
      year: 2030,
      value: 7610,
    },
    {
      year: 2035,
      value: 6816,
    },
    {
      year: 2040,
      value: 6048,
    },
    {
      year: 2045,
      value: 5324,
    },
  ],
}

export const populationByYoungerApiFixture = {
  label: "年少人口",
  data: [
    {
      year: 1980,
      value: 2906,
      rate: 22.6,
    },
    {
      year: 1985,
      value: 2769,
      rate: 21.7,
    },
    {
      year: 1990,
      value: 2346,
      rate: 18.6,
    },
    {
      year: 1995,
      value: 2019,
      rate: 16,
    },
    {
      year: 2000,
      value: 1728,
      rate: 14.1,
    },
    {
      year: 2005,
      value: 1442,
      rate: 12.5,
    },
    {
      year: 2010,
      value: 1321,
      rate: 12.1,
    },
    {
      year: 2015,
      value: 1144,
      rate: 11.2,
    },
    {
      year: 2020,
      value: 936,
      rate: 10,
    },
    {
      year: 2025,
      value: 822,
      rate: 9.7,
    },
    {
      year: 2030,
      value: 705,
      rate: 9.2,
    },
    {
      year: 2035,
      value: 593,
      rate: 8.7,
    },
    {
      year: 2040,
      value: 513,
      rate: 8.4,
    },
    {
      year: 2045,
      value: 443,
      rate: 8.3,
    },
  ],
}

export const populationByWorkingAgeApiFixture = {
  label: "生産年齢人口",
  data: [
    {
      year: 1980,
      value: 2906,
      rate: 22.6,
    },
    {
      year: 1985,
      value: 2769,
      rate: 21.7,
    },
    {
      year: 1990,
      value: 2346,
      rate: 18.6,
    },
    {
      year: 1995,
      value: 2019,
      rate: 16,
    },
    {
      year: 2000,
      value: 1728,
      rate: 14.1,
    },
    {
      year: 2005,
      value: 1442,
      rate: 12.5,
    },
    {
      year: 2010,
      value: 1321,
      rate: 12.1,
    },
    {
      year: 2015,
      value: 1144,
      rate: 11.2,
    },
    {
      year: 2020,
      value: 936,
      rate: 10,
    },
    {
      year: 2025,
      value: 822,
      rate: 9.7,
    },
    {
      year: 2030,
      value: 705,
      rate: 9.2,
    },
    {
      year: 2035,
      value: 593,
      rate: 8.7,
    },
    {
      year: 2040,
      value: 513,
      rate: 8.4,
    },
    {
      year: 2045,
      value: 443,
      rate: 8.3,
    },
  ],
}

export const populationByOlderApiFixture = {
  label: "老年人口",
  data: [
    {
      year: 1980,
      value: 2906,
      rate: 22.6,
    },
    {
      year: 1985,
      value: 2769,
      rate: 21.7,
    },
    {
      year: 1990,
      value: 2346,
      rate: 18.6,
    },
    {
      year: 1995,
      value: 2019,
      rate: 16,
    },
    {
      year: 2000,
      value: 1728,
      rate: 14.1,
    },
    {
      year: 2005,
      value: 1442,
      rate: 12.5,
    },
    {
      year: 2010,
      value: 1321,
      rate: 12.1,
    },
    {
      year: 2015,
      value: 1144,
      rate: 11.2,
    },
    {
      year: 2020,
      value: 936,
      rate: 10,
    },
    {
      year: 2025,
      value: 822,
      rate: 9.7,
    },
    {
      year: 2030,
      value: 705,
      rate: 9.2,
    },
    {
      year: 2035,
      value: 593,
      rate: 8.7,
    },
    {
      year: 2040,
      value: 513,
      rate: 8.4,
    },
    {
      year: 2045,
      value: 443,
      rate: 8.3,
    },
  ],
}

export const populationCompositionApiFixture = {
  message: null,
  result: {
    boundaryYear: 2020,
    data: [
      totalPopulationApiFixture,
      populationByYoungerApiFixture,
      populationByWorkingAgeApiFixture,
      populationByOlderApiFixture,
    ],
  },
}
