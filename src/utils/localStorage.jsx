// localStorage.clear()

const employees = [
  {
    "id": 1, "firstName": "Amit", "email": "employee1@example.com", "password": "123",
    "tasks": [
      {"taskTitle": "Task 1", "description": "Complete project report", "date": "2025-02-14", "category": "Work", "active": true, "newTask": false, "completed": false, "failed": false},
      {"taskTitle": "Task 2", "description": "Update client database", "date": "2025-02-15", "category": "Data Entry", "active": true, "newTask": true, "completed": false, "failed": false}
    ],
    "taskCounts": {"active": 2, "newTask": 1, "completed": 0, "failed": 0}
  },
  {
    "id": 2, "firstName": "Priya", "email": "employee2@example.com", "password": "123",
    "tasks": [
      {"taskTitle": "Task 1", "description": "Prepare sales presentation", "date": "2025-02-16", "category": "Sales", "active": false, "newTask": true, "completed": false, "failed": false},
      {"taskTitle": "Task 2", "description": "Organize team meeting", "date": "2025-02-17", "category": "Management", "active": true, "newTask": false, "completed": true, "failed": false}
    ],
    "taskCounts": {"active": 1, "newTask": 1, "completed": 1, "failed": 0}
  },
  {
    "id": 3, "firstName": "Rahul", "email": "employee3@example.com", "password": "123",
    "tasks": [
      {"taskTitle": "Task 1", "description": "Fix website bugs", "date": "2025-02-18", "category": "Development", "active": true, "newTask": true, "completed": false, "failed": false},
      {"taskTitle": "Task 2", "description": "Review pull requests", "date": "2025-02-19", "category": "Development", "active": false, "newTask": false, "completed": true, "failed": false}
    ],
    "taskCounts": {"active": 1, "newTask": 1, "completed": 1, "failed": 0}
  },
  {
    "id": 4, "firstName": "Sneha", "email": "employee4@example.com", "password": "123",
    "tasks": [
      {"taskTitle": "Task 1", "description": "Conduct market research", "date": "2025-02-20", "category": "Research", "active": true, "newTask": false, "completed": false, "failed": false},
      {"taskTitle": "Task 2", "description": "Prepare competitor analysis", "date": "2025-02-21", "category": "Analysis", "active": true, "newTask": true, "completed": false, "failed": false}
    ],
    "taskCounts": {"active": 2, "newTask": 1, "completed": 0, "failed": 0}
  },
  {
    "id": 5, "firstName": "Vikram", "email": "employee5@example.com", "password": "123",
    "tasks": [
      {"taskTitle": "Task 1", "description": "Draft social media plan", "date": "2025-02-22", "category": "Marketing", "active": false, "newTask": true, "completed": false, "failed": false},
      {"taskTitle": "Task 2", "description": "Schedule ad campaigns", "date": "2025-02-23", "category": "Marketing", "active": true, "newTask": false, "completed": true, "failed": false}
    ],
    "taskCounts": {"active": 1, "newTask": 1, "completed": 1, "failed": 0}
  }
];

const admin = [{
  "id": 1, "firstName": "Rajesh", "email": "admin@example.com", "password": "123"
}];


export const setLocalstorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
}