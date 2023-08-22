import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
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
   

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {jsonData.map((department, departmentIndex) => (
                <div key={departmentIndex}>
                    <ListItemButton >
                        <Checkbox {...label}  />
                        <ListItemText primary={department.department} />
                        {/* {openDepartments[departmentIndex] ? <ExpandLess /> : <ExpandMore />} */}
                    </ListItemButton>
                    <Collapse in={true}  timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {department.sub_departments.map((subDepartment, subDepartmentIndex) => (
                                <ListItemButton key={subDepartmentIndex} sx={{ pl: 4 }} >
                                    <Checkbox {...label}  />
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
