import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const GitHubSearchInput = ({
  accountName,
  setAccountName,
  accountNameValidation,
  handleShowInfo,
}) => {
  return (
    <Row className="justify-content-center align-items-end">
      <Col sm="6">
        <div>
          <Form.Label htmlFor="inputGitHubName">
            <h5>GitHub Account Name :</h5>
          </Form.Label>
          {accountNameValidation && (
            <p className="text-danger">Account Name is required *</p>
          )}
          <Form.Control
            type="text"
            id="inputGitHubName"
            className="mb-3 mb-sm-0"
            placeholder="Please enter GitHub account name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </div>
      </Col>
      <Col sm="3">
        <Button onClick={handleShowInfo} variant="outline-primary">
          Show Info
        </Button>
      </Col>
    </Row>
  );
};

export default GitHubSearchInput;
