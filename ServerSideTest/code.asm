section .data
    msg db 'Hello, world!', 0xa ; string to be printed
    len equ $-msg ; calculate length of the string

section .text
    global _start ; declare the entry point of the program

_start:
    ; write the string to stdout
    mov eax, 4 ; write system call
    mov ebx, 1 ; stdout file descriptor
    mov ecx, msg ; pointer to the string
    mov edx, len ; length of the string
    int 0x80 ; execute the system call

    ; exit the program
    mov eax, 1 ; exit system call
    xor ebx, ebx ; exit code
    int 0x80 ; execute the system call
