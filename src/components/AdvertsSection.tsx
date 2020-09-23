import React from 'react'
import Container from './Container'

interface AdvertsSectionProps {

}

const AdvertsSection: React.FC<AdvertsSectionProps> = ({}) => {
    return (
      <div>
        <Container>
          <div>
            <h2>Latest Articles</h2>
          </div>
        </Container>
      </div>
    );
}

export default AdvertsSection;