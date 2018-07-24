Write your tests here.

WHEN I visit the homepage
THEN I expect to see pagination at the bottom
AND I expect to see 5 page button
WHEN I select page 5
THEN I expect to see the following profiles in the table:
    | undefined      |
    
WHEN I visit the homepage
THEN I expect to see pagination at the bottom
AND I expect to see 5 page button   
WHEN I search for "United" in filters sidebar
THEN I expect to see 3 page button
    
WHEN I visit the homepage
THEN I expect to see pagination at the bottom
TEHN I select page 5
WHEN I search for "United" in filters sidebar
THEN I expect the current page to be 1
    
WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
AND I expect to see a header with profile full name
WHEN I change the First name and click save
THEN I expect the data to be saved
AND I expect the full name on the header is updated
    
WHEN I visit profile edit page
THEN I expect profile data to be pre-filled
WHEN I clear the First name input
THEN I expect the submit button is disabled
AND  I expect the error message appear below the First name input