import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

const jsonData = [
    {
        "department": "customer_service",
        "sub_departments": [
            "support",
            "customer_success"
        ]
    },
    {
        "department": "design",
        "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function NestedList() {
    const [openDepartments, setOpenDepartments] = React.useState<{ [key: number]: boolean }>({});
    const [selectedDepartments, setSelectedDepartments] = React.useState<number[]>([]);

    const handleDepartmentClick = (departmentIndex: number) => {
        const newOpenDepartments = { ...openDepartments };
        newOpenDepartments[departmentIndex] = !newOpenDepartments[departmentIndex];
        setOpenDepartments(newOpenDepartments);
    };

    const handleSubDepartmentClick = (departmentIndex: number, subDepartment: string) => {
        const newSelectedDepartments = [...selectedDepartments];
        const subDepartmentIndex = jsonData[departmentIndex].sub_departments.indexOf(subDepartment);

        if (subDepartmentIndex !== -1) {
            if (newSelectedDepartments.includes(subDepartmentIndex)) {
                newSelectedDepartments.splice(newSelectedDepartments.indexOf(subDepartmentIndex), 1);
            } else {
                newSelectedDepartments.push(subDepartmentIndex);
            }
            setSelectedDepartments(newSelectedDepartments);
        }
    };

    const isDepartmentSelected = (departmentIndex: number) => {
        const subDepartments = jsonData[departmentIndex].sub_departments;
        return subDepartments.every(subDep => selectedDepartments.includes(departmentIndex));
    };

    const isSubDepartmentSelected = (subDepartmentIndex: number) => {
        return selectedDepartments.includes(subDepartmentIndex);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {jsonData.map((department, departmentIndex) => (
                <div key={departmentIndex}>
                    <ListItemButton onClick={() => handleDepartmentClick(departmentIndex)}>
                        <Checkbox {...label} checked={isDepartmentSelected(departmentIndex)} />
                        <ListItemText primary={department.department} />
                        {openDepartments[departmentIndex] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openDepartments[departmentIndex]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {department.sub_departments.map((subDepartment, subDepartmentIndex) => (
                                <ListItemButton key={subDepartmentIndex} sx={{ pl: 4 }} onClick={() => handleSubDepartmentClick(departmentIndex, subDepartment)}>
                                    <Checkbox {...label} checked={isSubDepartmentSelected(subDepartmentIndex)} />
                                    <ListItemText primary={subDepartment} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </div>
            ))}
        </List>
    );
}
