CREATE TABLE IF NOT EXISTS assembly_code (
    id INTEGER PRIMARY KEY,
    code TEXT NOT NULL
);
INSERT INTO assembly_code (id, code) VALUES (1, 'MOV AX, 1\nADD AX, 2\nMOV BX, 3\nSUB BX, 4\n');