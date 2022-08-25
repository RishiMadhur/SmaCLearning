const data = [
  {
    id: 1,
    CurrentSem: 8.5,
    LastSemCGPA: 9.0,
    AverageCGPA: 8.9,
    NoOfBacklogs: 0,
    Inter: 10.0,
    SSC: 9.7,
  },
  {
    id: 2,
    CurrentSem: 8.5,
    LastSemCGPA: 9.0,
    AverageCGPA: 8.9,
    NoOfBacklogs: 0,
    Inter: 10.0,
    SSC: 9.7,
  },
  {
    id: 3,
    CurrentSem: 8.5,
    LastSemCGPA: 9.0,
    AverageCGPA: 8.9,
    NoOfBacklogs: 0,
    Inter: 10.0,
    SSC: 9.7,
  },
  {
    id: 4,
    CurrentSem: 8.5,
    LastSemCGPA: 9.0,
    AverageCGPA: 8.9,
    NoOfBacklogs: 0,
    Inter: 10.0,
    SSC: 9.7,
  },
];

const academicData = data.map((data,index)=>({...data,index}));
export default academicData;