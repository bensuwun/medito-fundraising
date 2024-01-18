/**
 * Obtain a single project from Contentful.
 * @param id string - The id of the project
 */
export const getProject = (id: string) => {
    `
    {
        fundraisingProject(id: ${id}) {
          name
          description
          targetAmt
          faqsCollection {
            items {
              sys {
                id
              }
              question
              answer
            }
          }
          rewardsCollection {
            items {
              sys {
                id
              }
              reward
              requiredAmt
              description
            }
          }
        }
      }
    `;
};