
import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';



const WorkingNumbers = () => {

 

  let data = [];
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  


    useEffect(() => {
      
    }, [data]);

 const handleChange = event => {
   const { name, value } = event.target;
      switch (name) {
        case 'date':
          setDate(value);
          break;

        case 'name':
          setName(value);
          break;

        default:
          break;
      }
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    let calculation = {};

    const lastNumberPosition = date.split('').length - 1;

        
    const nOne = date.split('').reduce((prev, number) => {
      return prev + parseFloat(number);
    }, 0);
    calculation.nOne = nOne;

    
    const nTwo = nOne
      .toString()
      .split('')
      .reduce((prev, number) => {
        return prev + parseFloat(number);
      }, 0);
    calculation.nTwo = nTwo;


    const nThree = nOne - date.split('')[0] * 2;
    calculation.nThree = nThree;

    const nFour = nThree
      .toString()
      .split('')
      .reduce((prev, number) => {
        return prev + parseFloat(number);
      }, 0);
    calculation.nFour = nFour;

    const nFive = nOne + (date.split('')[lastNumberPosition] === 0 ? date.split('')[lastNumberPosition-1]*2 :date.split('')[lastNumberPosition]*2) ;
    calculation.nFive = nFive;

    const nSix = nFive
      .toString()
      .split('')
      .reduce((prev, number) => {
        return prev + parseFloat(number);
      }, 0);
    calculation.nSix = nSix;
    calculation.id = 25;

    data.push(calculation);

  };

  console.log(data);

  return (
    <>
      <form
        className="row gy-2 gx-4 align-items-end mx-0 mb-4 bg-secondary-subtle border border-secondary-subtle rounded-3 p-3"
        onSubmit={handleSubmit}
      >
        <h4>Enter data for calculation</h4>

        <div className="col-auto">
          <label className="" htmlFor="autoSizingInput">
            Date of Birth - format DDMMYYYY
          </label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="DDMMYYYY"
            name="date"
            onChange={handleChange}
            value={date}
            required
          />
        </div>
        <div className="col-auto">
          <label className="" htmlFor="autoSizingInput">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="Enter the person's name"
            name="name"
            onChange={handleChange}
            value={name}
            required
          />
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      {data?.map(item => (
        <div>
          <p>#1</p>
          <p>item.nOne</p>
          <p>#2</p>
          <p>item.ntwo</p>
        </div>
      ))}

      {/* <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#5 </th>
                    <th>#6</th>
                    <th>#1</th>
                    <th>#2</th>
                    <th>#3</th>
                    <th>#4</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map(item => (
                    <tr key={item.id} className="align-items-center">
                      <td>{item.nFive}</td>
                      <td>{item.nSix}</td>
                      <td>{item.nOne}</td>
                      <td>{item.nTwo}</td>
                      <td>{item.nThree}</td>
                      <td>{item.nFour}</td>
                      <td>{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </>
  );
};

export default WorkingNumbers;
