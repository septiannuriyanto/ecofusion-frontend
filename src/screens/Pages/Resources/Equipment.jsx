import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../../components/PageHeader";
import EquipmentListAndDetail from "../../../components/Resources/EquipmentListAndDetail";


class Equipments extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Equipments"
              Breadcrumb={[
                { name: "Resources", navigate: "" },
                { name: "Equipments", navigate: "" },
              ]}
            />
             <div className="row clearfix">
              <EquipmentListAndDetail />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(Equipments);
