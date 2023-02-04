import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact-form pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div className="form-area mt-5 p-lg-4 p-3">
                <form>
                  <div className="row">
                    <div className="col-sm-12 text-center text-white mb-3 ">
                      <h3>-)-Contact Us-(-</h3>
                    </div>
                  </div>
                  <dl className="row">
                    <dt className="col-sm-4 text-white">Name*</dt>
                    <dd className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </dd>

                    <dt className="col-sm-4 text-white ">Email*</dt>
                    <dd className="col-sm-8">
                      <input
                        type="Email"
                        className="form-control text-info"
                        placeholder="Email"
                      />
                    </dd>

                    <dt className="col-sm-4 text-white font-secondary">
                      Address(1)
                    </dt>
                    <dd className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </dd>

                    <dt className="col-sm-4 text-truncate text-white font-secondary">
                      Address(2)
                    </dt>
                    <dd className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </dd>

                    <dt className="col-sm-4 text-truncate text-white font-secondary">
                      Passport Number
                    </dt>
                    <dd className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Passport Number"
                      />
                    </dd>
                  </dl>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        type="submit"
                        className="form-control fw-bold"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
