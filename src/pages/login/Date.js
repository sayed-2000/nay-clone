export const dataMonth = [
    {label:"Month",value:"Month",id:1},
    {label:"January",value:"January",id:2},
    {label:"February",value:"February",id:3},
    {label:"March",value:"March",id:4},
    {label:"April",value:"April",id:5},
    {label:"May",value:"May",id:6},
    {label:"June",value:"June",id:7},
    {label:"July",value:"July",id:8},
    {label:"August",value:"August",id:9},
    {label:"September",value:"September",id:10},
    {label:"October",value:"October",id:11},
    {label:"November",value:"November",id:12},
    {label:"December",value:"December",id:13},
];

export const Days = []

for(let i = 1; i <= 31;i++) {
        Days.push({value:i})
}


export const years = []

for (let i = [new Date().getFullYear()]; i >= 1903 ; i--) {
    years.push(i)
  }


  