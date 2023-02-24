## This is build on Python

# Interactive Assembly Code Visualization

This is a simple web application for visualizing assembly code. The code is parsed and displayed in a grid format, where each cell contains an opcode or instruction from the code. The application is built using Python and Flask, with SQLite as the database backend.

# Installation
To install and run the application, follow these steps:

- Clone the repository: git clone https://github.com/your_username/assembly-code-visualization.git
- Change into the project directory: cd assembly-code-visualization
- Create a virtual environment: python3 -m venv venv
- Activate the virtual environment: source venv/bin/activate
- Install the required packages: pip install -r requirements.txt
- Initialize the database: flask init-db
- Start the application: flask run
- The application should now be running at http://127.0.0.1:5000. You can view the assembly code by clicking the "Visualize Code" button on the homepage.

# Usage
To use the application, follow these steps:

- Navigate to http://127.0.0.1:5000 in your web browser.
- Click the "Visualize Code" button to view the assembly code grid.
- Hover over a cell to view its contents.
- Click on a cell to toggle highlighting of its row and column.
- Use the "Reset" button to clear any highlighting.
