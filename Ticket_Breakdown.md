# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1
Add ability to set customID on an agent for each facility via the API

#### Acceptance Criteria
- Should be able to send customID in the API request to create/update an agent record. This field is mandatory.
- Should have custom_id column on the Agent table

#### Time/Effort Estimate
1 point (1 day)

##### Blocker
None

### Ticket 2
As a facility admin, I want to be able to provide a csv file of existing agents with custom_ids so that I can add the custom ID for all existing agents

#### Acceptance Criteria
- Given that I have a csv file with the aforementioned data, I should be able to use a simple interface to upload the csv file and click on update
- If the csv doesn't have custom_id fields, then the update should fail with an error message that specifies the error
- if the csv file has no error, I should see a success message that the upload was successful

#### Time/Effort Estimate
3 point (3 days)

##### Blocker
Blocked by ticket 1

### Ticket 3
As a facility admin, I want to be able to create a new agent with a custom_id 

#### Acceptance Criteria
- Given that I have access to create an agent, I should be able to set custom_id on the create form interface
- If the custom_id is empty, then the creation should fail with an error message that specifies the error
- if the custom_id is valid, I should see a success message that the creation was successful
- I should see the custom_id on the newly created agent

#### Time/Effort Estimate
3 point (3 days)

##### Blocker
Blocked by ticket 1

### Ticket 4
Update the `getShiftsByFacility` function to return the custom_id as part of the metadata of the agent

#### Acceptance Criteria
- Should return the custom_id as part of the agent's metadata when the function is called

#### Time/Effort Estimate
1 point (1 day)

##### Blocker
Blocked by ticket 1

### Ticket 5
Update the `generateReport` function to replace the agent's id with the agent's custom_id as part of the shift report
#### Acceptance Criteria
- Should return the agent's custom_id in the report generated
#### Time/Effort Estimate
1 point (1 day)

##### Blocker
Blocked by ticket 1,2 and 4
