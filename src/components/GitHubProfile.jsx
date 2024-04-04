import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const GitHubProfile = ({profileInfo}) => {
  return (
    <Row className='justify-content-center align-items-end mt-5'>
        <Col sm='12'>
             <div className='border rounded p-3 '>
                <Row className='justify-content-center gap-4'>
                    <Col md="4" className='text-center'>
                        <img src={profileInfo?.avatar_url} width='200px' height='200px' className='rounded-circle border' alt='profileImage'/>
                        <h3 className='mt-3'>{profileInfo?.login}</h3>
                    </Col>
                    <Col md="6">
                        <div>
                        <h5>Location :</h5>
                        <p>{profileInfo?.location || 'No Location'}</p>
                        </div>
                        <div>
                        <h5>Bio :</h5>
                        <p>{profileInfo?.bio || 'No Bio'}</p>
                        </div>
                        <div>
                        <h5>GitHubId :</h5>
                        <p>{profileInfo?.id}</p>
                        </div>
                        <div>
                        <h5>Number Of Repo :</h5>
                        <p>{profileInfo?.public_repos}</p>
                        </div>
                    </Col>
                </Row>
             </div>
        </Col>
    </Row>
    
  )
}

export default GitHubProfile