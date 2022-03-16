import {gql} from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
    query getAllProducts {
        category{
          name
          products {
            id
            name
            inStock
            gallery
            attributes {
              id
              name
              type
                items {
                  displayValue
                  value
                  id
                  }
                }
            description
            category
            prices {
              currency{
                label
                symbol
              }
              amount
            }
            brand
          }
        }
}
`
export const GET_CLOTHES = gql`
    query GetTheClothes {
        category(input: { title: "clothes" }){
          name
          products{
            id
            name
            inStock
            gallery
            attributes {
              id
              name
              type
                items{
                  displayValue
                  value
                  id
                }
            
            }
          description
          category
          prices{
            currency{
              label
              symbol
            }
            amount
          }
            brand
          }
        }
    }
`

export const GET_CURRENCY = gql`
    query getCurriencies{
      currencies{
        label
        symbol
      }
    }
`;

export const GET_EACH_PRODUCT = gql`
  query GetAllTheProduct ($id: String!){
      product(id: $id) {
          id
          name
          inStock
          gallery
          attributes {
          id
          name
          type
              items {
              displayValue
              value
              id
              }
              }
          description
          category
          prices {
            currency{
              label
              symbol
            }
            amount
          }
          
          brand
      }
  }
`;

export const GET_GADGETS= gql`
  query GetTechProducts {
    category(input: { title: "tech" }){
      name
      products{
        id
        name
        inStock
        gallery
        attributes {
          id
          name
          type
            items{
              displayValue
              value
              id
            }
        
        }
      description
      category
      prices{
        currency{
          label
          symbol
        }
        amount
      }
        brand
      }
    }
  }
`;
