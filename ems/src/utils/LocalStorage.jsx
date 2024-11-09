const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Complete Project Report",
          "description": "Compile and finalize the project report for submission.",
          "date": "2024-11-10",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Review Code",
          "description": "Review the codebase for quality and improvements.",
          "date": "2024-11-12",
          "category": "Quality Assurance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Team Meeting",
          "description": "Participate in the weekly team meeting.",
          "date": "2024-11-13",
          "category": "Meetings"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix Bugs",
          "description": "Resolve all bugs in the issue tracker.",
          "date": "2024-11-09",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Update Documentation",
          "description": "Update the project documentation for the latest release.",
          "date": "2024-11-11",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Research New Tools",
          "description": "Research new tools for improving development workflow.",
          "date": "2024-11-14",
          "category": "Research"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Client Follow-up",
          "description": "Follow up with clients for project feedback.",
          "date": "2024-11-12",
          "category": "Client Relations"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Prepare Presentation",
          "description": "Prepare a presentation for the new product launch.",
          "date": "2024-11-07",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Organize Workshop",
          "description": "Organize a team workshop on new tech skills.",
          "date": "2024-11-05",
          "category": "Training"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Test New Features",
          "description": "Perform tests on newly implemented features.",
          "date": "2024-11-10",
          "category": "Quality Assurance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Submit Code Review",
          "description": "Submit the review for peer code submissions.",
          "date": "2024-11-06",
          "category": "Code Review"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Update Project Plan",
          "description": "Revise the project plan for upcoming milestones.",
          "date": "2024-11-15",
          "category": "Project Management"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Conduct Interview",
          "description": "Conduct technical interview for a candidate.",
          "date": "2024-11-11",
          "category": "Human Resources"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Write Test Cases",
          "description": "Develop test cases for new application modules.",
          "date": "2024-11-13",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Compile Financial Report",
          "description": "Compile the monthly financial report.",
          "date": "2024-11-01",
          "category": "Finance"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

    
  }

  export const getLocalStorage=()=>{
    
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   
   return {employees,admin}


  }