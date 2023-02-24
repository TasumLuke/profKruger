from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__, static_url_path='/static')
app.config['DATABASE'] = 'assembly_code.db'

def generateCodeGrid(opcodes):
    """
    Generates the code grid for the assembly code.
    """
    code = []
    for i in range(0, len(opcodes), 2):
        code.append(opcodes[i:i+2])
    return code

def get_db():
    """
    Returns a connection to the SQLite database.
    """
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """
    Initializes the database schema.
    """
    with app.app_context():
        db = get_db()
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()


@app.route('/')
@app.route('/')
def index():
    # Get the assembly code from the database
    conn = get_db()
    assembly_code = conn.execute('SELECT code FROM assembly_code').fetchone()['code']
    conn.close()

    opcodes = []
    for line in assembly_code.split('\n'):
        opcode = line.split(' ')[0]
        opcodes.extend(opcode.split(','))
    code_grid = generateCodeGrid(opcodes)
    return render_template('index.html', code_grid=code_grid)


#def index():
    # Get the assembly code from the database
    #conn = get_db()
    #row = conn.execute('SELECT code FROM assembly_code').fetchone()
    #conn.close()
    
    #if row is not None:
        #assembly_code = row['code']
        #opcodes = []
        #for line in assembly_code.split('\n'):
           # opcode = line.split(' ')[0]
           # opcodes.extend(opcode.split(','))
       # code_grid = generateCodeGrid(opcodes)
       # return render_template('index.html', code_grid=code_grid)
   # else:
     #   return "No assembly code found in the database"


@app.route('/admin', methods=['GET', 'POST'])
@app.route('/admin', methods=['GET', 'POST'])
def admin():
    if request.method == 'POST':
        assembly_code = request.form['assembly_code']
        # Save the assembly code to the database
        conn = get_db()
        conn.execute('UPDATE assembly_code SET code = ?', [assembly_code])
        conn.commit()
        conn.close()
        return render_template('admin.html', message='Code saved successfully!')
    else:
        return render_template('admin.html')


if __name__ == '__main__':
    init_db()
    app.run(debug=True)