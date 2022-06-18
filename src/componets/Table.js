import TableHeader from "./TableHeader";

const DataFromServer = [
  {
    Date: "20.04.1889",
    Name: "Adolf",
    Count: 2000,
    m: 1
  },
  {
    Date: "20.04.1889",
    Name: "Adolf",
    Count: 2000,
    m: 1
  }
];

export default function Table() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Count</th>
            <th>Metrs</th>
          </tr>
        </thead>
        {DataFromServer.map((el) => (
          <tr>
            <td>{el.Date}</td>
            <td>{el.Name}</td>
            <td>{el.Count}</td>
            <td>{el.m}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
