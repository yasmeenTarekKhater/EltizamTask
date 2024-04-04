import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

import GitHubProfile from "../components/GitHubProfile";
import NotFoundAccount from "../components/NotFoundAccount";
import GitHubSearchInput from "../components/GitHubSearchInput";
import Loading from "../components/Loading";

const GitHubAccount = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [profileInfo, setProfileInfo] = useState(null);
  const [accountName, setAccountName] = useState("");
  const [error, setError] = useState(null);
  const [accountNameValidation, setaccountNameValidation] = useState(false);

  const handleshowInfo = () => {
    //showing loading until data fetched
    setIsLoading(true);
    // fetchig data if accountName != ''
      if (accountName) {
          axios
          .get(`https://api.github.com/users/${accountName}`)
          .then(function (response) {
            // handle success
            setProfileInfo(response.data);
            setAccountName("");
            setError(null);
            setIsLoading(false)
          })
          .catch(function (error) {
            // handle error
            if(error.response && error.response.status===404){
              setError(error);
              setProfileInfo(null);
              setIsLoading(false)
             }
          });
        //hide required message 
        setaccountNameValidation(false);
      } else {
        //showing required message and hide loading
        setaccountNameValidation(true);
        setIsLoading(false)
      }
  };
  return (
    <Container className="mt-4">
      <GitHubSearchInput
        accountName={accountName}
        setAccountName={setAccountName}
        accountNameValidation={accountNameValidation}
        handleShowInfo={handleshowInfo}
      />
      {/* showing message if github account not found */}
      {error && !accountNameValidation ? <NotFoundAccount /> : null}

      {/* showing profile info if exists*/}
      {
        isLoading?
        (<Loading/>)
        :
        (
          profileInfo &&!accountNameValidation &&(
        <GitHubProfile profileInfo={profileInfo}/>
          )
        )
      }
    </Container>
  );
};

export default GitHubAccount;
