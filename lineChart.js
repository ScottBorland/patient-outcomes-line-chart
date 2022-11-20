
const labels = [
    0, 1, 2, 3,	4, 5, 6, 7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	36,	37,	38,	39,	40,	41,	42,	43,	46,	47,	48,	49,	50,	51,	52
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Health Education East Midlands',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [27,17,46,26,20,21,7,4,3,2,1,3,1,1,2,0,0,0,0,0,0,2,0,0,4,1,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    },
    {
        label: 'Health Education East of England',
        backgroundColor: 'rgb(25, 99, 132)',
        borderColor: 'rgb(25, 99, 132)',
        data: [5,19,42,30,12,13,2,0,2,2,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    },
    {
        label: 'Health Education Kent, Surrey and Sussex',
        backgroundColor: 'rgb(3, 49, 32)',
        borderColor: 'rgb(3, 49, 32)',
        data: [32,	3,	60,	48,	20,	34,	6,	29,	0,	5,	1,	1,	2,	0,	1,	2,	2,	2,	0,	2,	7,	5,	6,	7,	9,	2,	3,	4,	0,	1,	0,	3,	8,	0,	2,	0,	4,	0,	1,	0,	1,	0,	1,	1,	1,	1,	0,	1,	2,	3
        ],
    },
    {
      label: 'Health Education North Central and East London',
      backgroundColor: 'rgb(45, 249, 32)',
      borderColor: 'rgb(45, 249, 32)',
      data: [11,4,33,17,12,16,17,20,5,3,1,5,7,0,1,1,0,0,1,0,1,1,1,0,2,6,1,3,0,1,0,2,0,0,0,0,1,1,2,1,3,0,0,0,0,0,0,2,1,8
      ],
    },
    {
      label: 'Health Education North West (Mersey Sector)',
      backgroundColor: 'rgb(3, 49, 32)',
      borderColor: 'rgb(3, 49, 32)',
      data: [14,	27,	60,	32,	6	,2,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
      ],
  },
  {
    label: 'Health Education North East',
    backgroundColor: 'rgb(98, 29, 332)',
    borderColor: 'rgb(98, 29, 332)',
    data: [9,5,126,58,	22,	24	,3,	3,	2,	2,	6,	0,	0,	1,	4,	0,	2,	3,	1,	1,	0,	0,	7,	0,	1,	3,	1,	0,	6,	0,	1,	6,	0,	2,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1
    ],
  },
  {
    label: 'Health Education North West (North West Sector)',
    backgroundColor: 'rgb(123, 349, 32)',
    borderColor: 'rgb(123, 349, 32)',
    data: [71,	32,	73,	39,	28,	9,	0,	4,	0,	0,	2,	1,	0,	2,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,

    ],
},
{
  label: 'Health Education North West London',
  backgroundColor: 'rgb(98, 178, 32)',
  borderColor: 'rgb(98, 178, 32)',
  data: [12,	8,	39,	21,	10,	27,	11,	15,	10,	0,	2,	7,	7,	1,	0,	0,	3,	0,	1,	5,	2,	0,	5,	1,	1,	0,	3,	0,	0,	3,	0,	1,	0,	2,	2,	1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0
  ],
},
{
  label: 'Health Education South London',
  backgroundColor: 'rgb(123, 349, 32)',
  borderColor: 'rgb(123, 349, 32)',
  data: [15,	9,	44,	41,	15,	19,	19,	23,	0,	2,	0,	5,	5,	4,	2,	1,	0,	1,	0,	2,	6,	2,	1,	0,	0,	3,	1,	1,	1,	0,	1,	3,	0,	0,	1,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	4
  ],
},
{
label: 'Health Education South West',
backgroundColor: 'rgb(8, 78, 350)',
borderColor: 'rgb(8, 78, 350)',
data: [2,	12,	23,	14,	21,	19,	0,	2,	9,	5,	4,	1,	0,	0,	1,	0,	0,	1,	1,	0,	1,	0,	0,	1,	0,	2,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0],
},
{
  label: 'Health Education Thames Valley',
  backgroundColor: 'rgb(343, 49, 32)',
  borderColor: 'rgb(343, 49, 32)',
  data: [12,	5,	31,	17,	33,	4,	12,	4,	2,	1,	1,	0,	0,	0,	0, 1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	5,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1

  ],
},
{
label: 'Health Education Wessex',
backgroundColor: 'rgb(228, 78, 50)',
borderColor: 'rgb(288, 78, 50)',
data: [3,	10,	117,	57,	20,	37,	2,	1,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	14,	3,	5,	12,	0,	0,	7,	4,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0
],
},
{
  label: 'Health Education West Midlands',
  backgroundColor: 'rgb(243, 49, 82)',
  borderColor: 'rgb(243, 49, 82)',
  data: [4,	6,	31,	14,	43,	19,	50,	55,	1,	4,	3,	1,	1,	1,	1,	1,	0,	0,	0,	0,	1,	0,	0,	1,	1,	11,	3,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	2
  ],
},
{
label: 'Health Education Yorkshire and the Humber',
backgroundColor: 'rgb(28, 78, 350)',
borderColor: 'rgb(28, 78, 350)',
data: [0,	2,	81,	29,	15,	2,	2,	3,	2,	7,	1,	6,	2,	0,	1,	2,	0,	0,	0,	0,	2,	0,	0,	0,	0,	0,	4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,

],
},
{
  label: 'NHS Education for Scotland - East Region',
  backgroundColor: 'rgb(24, 349, 82)',
  borderColor: 'rgb(24, 349, 82)',
  data: [4,	5,	19,	12,	1,	1,	1,	7,	1,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1

  ],
},
{
label: 'NHS Education for Scotland - North Region',
backgroundColor: 'rgb(128, 8, 35)',
borderColor: 'rgb(128, 8, 35)',
data: [0,	1,	1,	0,	7,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
],
},
{
  label: 'NHS Education for Scotland - South-East Region',
  backgroundColor: 'rgb(24, 349, 282)',
  borderColor: 'rgb(24, 349, 282)',
  data: [0,	5,	30,	5,	6,	1,	0,	6,	2,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
  ],
},
{
label: 'NHS Education for Scotland - West Region',
backgroundColor: 'rgb(147, 128, 345)',
borderColor: 'rgb(147, 128, 345)',
data: [0,17,	54,	105,	20,	1,	1,	1,	5,	24,	2,	4,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	1

],
},
{
  label: 'Northern Ireland Medical & Dental Training Agency',
  backgroundColor: 'rgb(24, 49, 282)',
  borderColor: 'rgb(24, 49, 282)',
  data: [0,0,	1,3,	8,	22,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	3,	3,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0
  ],
},
{
label: 'Republic of Ireland Deanery',
backgroundColor: 'rgb(7, 128, 150)',
borderColor: 'rgb(7, 128, 150)',
data: [0,	1,	2,	37,	0,	1,	5,	1,	0,	2,	2,	0,	2,	0,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	2,	0,	6,	15,	0,	3,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3,	4
],
},
{
  label: 'Wales Deanery',
  backgroundColor: 'rgb(237, 18, 150)',
  borderColor: 'rgb(237, 18, 150)',
  data: [5, 4, 56, 11, 35, 0, 18, 1, 2, 0, 0, 0, 1, 1, 0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
  ],
  },

]};

  const config = {
    type: 'line',
    data: data,
    options: {borderWidth: 1}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  )

//   datasets: [{
//     data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]
//   }]


//   const labels = [
//     0, 1, 2, 3,	4, 5, 6, 7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29,	30,	31,	32,	33,	34,	36,	37,	38,	39,	40,	41,	42,	43,	46,	47,	48,	49,	50,	51,	52
//   ];

//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'Health Education East Midlands',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [27,17,46,26,20,21,7,4,3,2,1,3,1,1,2,0,0,0,0,0,0,2,0,0,4,1,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
//     },

//     ]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };

//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   )