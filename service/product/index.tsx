import { gql } from '@apollo/client';

const GET_TWEET = gql`
  query {
    twitter {
      tweet(id: "1261034643710775299") {
        text
        user {
          name
          screen_name
          profile_image_url
        }
      }
    }
  }
`

export default GET_TWEET