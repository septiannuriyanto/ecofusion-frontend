import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseCommentBox: ["", "", ""],
    };
  }
  async onCollapse(index) {
    var c = this.state.collapseCommentBox;
    if (c[index] === "") {
      c[index] = "m-t-10 ";
      this.setState({
        collapseCommentBox: [...c],
      });
      setTimeout(() => {
        c[index] = "m-t-10 collapse show";
        this.setState({
          collapseCommentBox: [...c],
        });
      }, 500);
    } else {
      c[index] = "";
      this.setState({
        collapseCommentBox: [...c],
      });
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { collapseCommentBox } = this.state;
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
              HeaderText="History"
              Breadcrumb={[
                { name: "Activities", navigate: "" },
                { name: "History", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="body">
                    <div className="input-group m-b-0 p-10">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-magnifier"></i>
                        </span>
                      </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Keyword..."
                    />
                  </div>
                    <div
                      className="timeline-item green"
                      date-is="20-04-2018 - Today"
                    >
                      <h5>
                        Testing #120
                      </h5>
                      <span>
                        <a>Septian Nuriyanto - PLTS Mansinam</a>
                      </span>
                      <div className="msg">
                        <p>
                          Konfigurasi #64<br/>Result : Passed<br/>Action : Create Report
                        </p>
                        <b className="m-r-20">
                          <i className="icon-heart"></i> Like
                        </b>
                        <b
                          onClick={() => {
                            this.onCollapse(0);
                          }}
                          className={collapseCommentBox[0] ? "collapsed" : ""}
                        >
                          <i className="icon-bubbles"></i> Comment
                        </b>
                        <div
                          className={
                            collapseCommentBox[0]
                              ? collapseCommentBox[0]
                              : "m-t-10 collapse"
                          }
                          id="collapseExample"
                        >
                          <div className="well">
                            <form>
                              <div className="form-group">
                                <textarea
                                  className="form-control no-resize"
                                  placeholder="Enter here for tweet..."
                                  rows="2"
                                ></textarea>
                              </div>
                              <button className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="timeline-item blue"
                      date-is="19-04-2018 - Yesterday"
                    >
                      <h5>Testing #119</h5>
                      <span>
                        <a>Angga Prima Angkasa - PLTS Reremi Puncak</a>
                      </span>
                      <div className="msg">
                        <p>
                          Konfigurasi #12<br/>Result : Failed<br/>Action : Retrain Machine Learning
                        </p>
                        <b className="m-r-20">
                          <i className="icon-heart"></i> Like
                        </b>
                        <b
                          onClick={() => {
                            this.onCollapse(1);
                          }}
                          className={collapseCommentBox[1] ? "collapsed" : ""}
                        >
                          <i className="icon-bubbles"></i> Comment
                        </b>
                        <div
                          className={
                            collapseCommentBox[1]
                              ? collapseCommentBox[1]
                              : "m-t-10 collapse"
                          }
                          id="collapseExample"
                        >
                          <div className="well">
                            <form>
                              <div className="form-group">
                                <textarea
                                  className="form-control no-resize"
                                  placeholder="Enter here for tweet..."
                                  rows="2"
                                ></textarea>
                              </div>
                              <button className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item warning" date-is="21-02-2018">
                      <h5>
                        Testing #118
                      </h5>
                      <span>
                        <a>Wahyu Hadi Santoso - PLTS Manokwari</a>
                      </span>
                      <div className="msg">
                        <p>
                          Konfigurasi #10<br/>Result : Failed<br/>Action : Retrain Machine Learning
                        </p>
                        <b className="m-r-20">
                          <i className="icon-heart"></i> Like
                        </b>
                        <b
                          onClick={() => {
                            this.onCollapse(2);
                          }}
                          className={collapseCommentBox[2] ? "collapsed" : ""} style={{cursor : "pointer"}}
                        >
                          <i className="icon-bubbles"></i> Comment
                        </b>
                        <div
                          className={
                            collapseCommentBox[2]
                              ? collapseCommentBox[2]
                              : "m-t-10 collapse"
                          }
                          id="collapseExample"
                        >
                          <div className="well">
                            <form>
                              <div className="form-group">
                                <textarea
                                  className="form-control no-resize"
                                  placeholder="Enter here for tweet..."
                                  rows="2"
                                ></textarea>
                              </div>
                              <button className="btn btn-primary">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                      <ul className="body pagination pagination-primary">
                      <li className="page-item">
                        <button className="page-link">Previous</button>
                      </li>
                      <li className="page-item active">
                        <button className="page-link">1</button>
                      </li>
                      <li className="page-item">
                        <button className="page-link">2</button>
                      </li>
                      <li className="page-item">
                        <button className="page-link">3</button>
                      </li>
                      <li className="page-item">
                        <button className="page-link">Next</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(TimeLine);
