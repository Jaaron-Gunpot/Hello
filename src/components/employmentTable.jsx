import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const EmploymentTable = ({ title, coopInfo }) => {
    function handleChange(element){
        console.log(element)
    }
    return (
        <>
            <div>
                <h3>{title}</h3>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Employer</Table.HeaderCell>
                            <Table.HeaderCell>Degree</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Term</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {/* TODO:Fix Pagination */}
                    <Table.Body>
                            {coopInfo.map((infoObj,index) =>
                                <Table.Row>
                                    <Table.Cell>{infoObj.employer+index.toString()}</Table.Cell>
                                    <Table.Cell>{infoObj.degree}</Table.Cell>
                                    <Table.Cell>{infoObj.city}</Table.Cell>
                                    <Table.Cell>{infoObj.term}</Table.Cell>
                                </Table.Row>
                            )}
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>
                                <Menu floated='right' pagination  onItemClick={handleChange(this)}>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        </>
    )
}




export default EmploymentTable;