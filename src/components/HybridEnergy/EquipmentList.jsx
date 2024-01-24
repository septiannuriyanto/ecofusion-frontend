import React from "react";
import { connect } from "react-redux";
import { equipmentData } from "../../Data/Equipment";

class EquipmentList extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card product_item_list product-order-list">
          <div className="header">
            <h2>Equipment List for {this.props.site}</h2>
          </div>
          <div className="body">
            <div className="table-responsive">
              <table className="table table-hover m-b-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Code Number</th>
                    <th data-breakpoints="sm xs">Type</th>
       
                    <th>Equipment Group Identifier</th>
                    <th data-breakpoints="xs">Avg Efficiency</th>
                    <th>Last Test</th>
                    <th data-breakpoints="xs md">Status</th>
                    <th data-breakpoints="sm xs md">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  equipmentData.map((equipment, key) =>
                  <tr>
                  <td>{equipment.cn}</td>
                  <td>{equipment.type}</td>
                  <td>
                    <h5>{equipment.egi}</h5>
                  </td>
                  <td>{equipment.avg_efficiency}</td>
                  <td>{equipment.last_test_date}</td>
                  <td>
                    {
                    equipment.status==="Passed" ?
                    <span className="badge badge-success bg-success text-white">
                      {equipment.status}
                    </span>
                    :
                    equipment.status==="Progress" ?
                    <span className="badge badge-success bg-warning text-white">
                      {equipment.status}
                    </span>
                    :
                    <span className="badge badge-success bg-danger text-white">
                      {equipment.status}
                    </span>
                    }
                  </td>
                  <td>
                    <b className="btn btn-outline-secondary mr-1">
                      <i className="fa fa-eye"></i>
                    </b>
                    <b className="btn btn-outline-secondary">
                      <i className="fa fa-ellipsis-h"></i>
                    </b>
                  </td>
                </tr>
                  
                  )
                  }

                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(EquipmentList);
