import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const ListOrders = ({ orders }) => {
  return (
    <div className="table-responsive">
      <h6>
        <strong>Historial de Ordenes</strong>
      </h6>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Pago</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {orders ? (
            orders.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.user.name}</td>
                  <td>{order.user.lastname}</td>
                  <td>{order.status.name}</td>
                  <td>
                    <img src={order.payment.logo} alt="tipo pago"></img>
                  </td>
                  <td>{new Date(order.createdAt).toDateString()}</td>
                  <td>{order.total}</td>
                  <td className="text-center">
                    <Link to={`/user/order/${order.id}`} state={order}>
                      <i className="bi bi-ticket-detailed"></i>
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ListOrders;