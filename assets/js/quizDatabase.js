const quizDatabase = {
  "introduction-to-linux": {
    "linux-history": [
      {
        question: "Who created the Linux kernel in 1991?",
        options: [
          { text: "Richard Stallman", correct: false },
          { text: "Linus Torvalds", correct: true },
          { text: "Dennis Ritchie", correct: false },
          { text: "Ken Thompson", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the 'GNU' in GNU/Linux stand for?",
        options: [
          { text: "General Network Utilities", correct: false },
          { text: "GNU's Not Unix", correct: true },
          { text: "Global Network Universal", correct: false },
          { text: "General New Unix", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which philosophy is NOT associated with Linux development?",
        options: [
          { text: "Open source collaboration", correct: false },
          { text: "Everything is a file", correct: false },
          { text: "Proprietary software licensing", correct: true },
          { text: "Modular design", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What was the first Linux distribution ever created?",
        options: [
          { text: "Slackware", correct: true },
          { text: "Red Hat", correct: false },
          { text: "Debian", correct: false },
          { text: "SUSE", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which license does the Linux kernel use?",
        options: [
          { text: "MIT License", correct: false },
          { text: "Apache License", correct: false },
          { text: "GPL v2", correct: true },
          { text: "BSD License", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does the term 'copyleft' mean in Linux context?",
        options: [
          { text: "Copyright restrictions", correct: false },
          { text: "Left-aligned text formatting", correct: false },
          { text: "Ensuring derivative works remain free", correct: true },
          { text: "Copying files to the left directory", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What was the original name of the Linux kernel?",
        options: [
          { text: "Freax", correct: false },
          { text: "Unix", correct: false },
          { text: "Linux", correct: false },
          { text: "Freax", correct: true }
        ],
        difficulty: "hard"
      },
      {
        question: "Which company initially funded the development of Linux?",
        options: [
          { text: "Microsoft", correct: false },
          { text: "IBM", correct: true },
          { text: "Apple", correct: false },
          { text: "Sun Microsystems", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What was the first version of the Linux kernel released?",
        options: [
          { text: "0.01", correct: true },
          { text: "1.0", correct: false },
          { text: "2.0", correct: false },
          { text: "3.0", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the significance of the Linux mascot, Tux?",
        options: [
          { text: "It is a penguin", correct: true },
          { text: "It is a duck", correct: false },
          { text: "It is a cat", correct: false },
          { text: "It is a dog", correct: false }
        ],
        difficulty: "easy"
      }
    ],
    "linux-distributions": [
      {
        question: "Which Linux distribution is known for its stability and is commonly used in servers?",
        options: [
          { text: "Arch Linux", correct: false },
          { text: "Ubuntu", correct: false },
          { text: "Debian", correct: true },
          { text: "Fedora", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What package manager does Red Hat Enterprise Linux use?",
        options: [
          { text: "apt", correct: false },
          { text: "yum/dnf", correct: true },
          { text: "pacman", correct: false },
          { text: "zypper", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which distribution follows a rolling release model?",
        options: [
          { text: "CentOS", correct: false },
          { text: "Ubuntu LTS", correct: false },
          { text: "Arch Linux", correct: true },
          { text: "Red Hat Enterprise Linux", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the primary difference between Ubuntu and Kubuntu?",
        options: [
          { text: "Package manager", correct: false },
          { text: "Desktop environment", correct: true },
          { text: "Kernel version", correct: false },
          { text: "Target architecture", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which distribution is specifically designed for penetration testing?",
        options: [
          { text: "openSUSE", correct: false },
          { text: "Kali Linux", correct: true },
          { text: "Mint", correct: false },
          { text: "Elementary OS", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does LTS stand for in Ubuntu LTS versions?",
        options: [
          { text: "Latest Technology Support", correct: false },
          { text: "Long Term Support", correct: true },
          { text: "Linux Terminal System", correct: false },
          { text: "Limited Time Service", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which distribution is based on Debian and aims to be user-friendly?",
        options: [
          { text: "Fedora", correct: false },
          { text: "Mint", correct: true },
          { text: "CentOS", correct: false },
          { text: "Arch Linux", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the default desktop environment for Ubuntu?",
        options: [
          { text: "KDE", correct: false },
          { text: "GNOME", correct: true },
          { text: "XFCE", correct: false },
          { text: "Cinnamon", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which distribution is known for its simplicity and ease of use?",
        options: [
          { text: "Debian", correct: false },
          { text: "Puppy Linux", correct: true },
          { text: "Fedora", correct: false },
          { text: "Arch Linux", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which distribution is designed for scientific computing?",
        options: [
          { text: "Ubuntu", correct: false },
          { text: "Scientific Linux", correct: true },
          { text: "Mint", correct: false },
          { text: "openSUSE", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "basic-commands": [
      {
        question: "Which command is used to list files and directories?",
        options: [
          { text: "dir", correct: false },
          { text: "ls", correct: true },
          { text: "list", correct: false },
          { text: "show", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the command 'pwd' do?",
        options: [
          { text: "Print working directory", correct: true },
          { text: "Power down", correct: false },
          { text: "Print word count", correct: false },
          { text: "Process wait daemon", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command changes your current directory?",
        options: [
          { text: "chdir", correct: false },
          { text: "cd", correct: true },
          { text: "changedir", correct: false },
          { text: "move", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'ls -la' display?",
        options: [
          { text: "Only hidden files", correct: false },
          { text: "Files in long format including hidden files", correct: true },
          { text: "Only directories", correct: false },
          { text: "Files sorted by size", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command creates a new directory?",
        options: [
          { text: "newdir", correct: false },
          { text: "mkdir", correct: true },
          { text: "createdir", correct: false },
          { text: "makedir", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the tilde (~) represent in Linux paths?",
        options: [
          { text: "Root directory", correct: false },
          { text: "Current directory", correct: false },
          { text: "User's home directory", correct: true },
          { text: "Previous directory", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command copies files?",
        options: [
          { text: "cp", correct: true },
          { text: "mv", correct: false },
          { text: "rm", correct: false },
          { text: "ln", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the command 'rm -r' do?",
        options: [
          { text: "Removes a file", correct: false },
          { text: "Removes a directory and its contents", correct: true },
          { text: "Renames a file", correct: false },
          { text: "Moves a file", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command moves or renames files?",
        options: [
          { text: "cp", correct: false },
          { text: "mv", correct: true },
          { text: "rm", correct: false },
          { text: "ln", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the command 'touch' do?",
        options: [
          { text: "Creates a new file", correct: true },
          { text: "Updates file timestamps", correct: false },
          { text: "Deletes a file", correct: false },
          { text: "Copies a file", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "file-system-structure": [
      {
        question: "What is stored in the /etc directory?",
        options: [
          { text: "User home directories", correct: false },
          { text: "System configuration files", correct: true },
          { text: "Binary executables", correct: false },
          { text: "Temporary files", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which directory contains user home directories?",
        options: [
          { text: "/usr", correct: false },
          { text: "/var", correct: false },
          { text: "/home", correct: true },
          { text: "/opt", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the purpose of the /tmp directory?",
        options: [
          { text: "Store permanent files", correct: false },
          { text: "Store temporary files", correct: true },
          { text: "Store system logs", correct: false },
          { text: "Store user data", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Where are system log files typically stored?",
        options: [
          { text: "/var/log", correct: true },
          { text: "/etc/log", correct: false },
          { text: "/usr/log", correct: false },
          { text: "/tmp/log", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does the /proc directory contain?",
        options: [
          { text: "Program files", correct: false },
          { text: "Process information and kernel data", correct: true },
          { text: "Procedure scripts", correct: false },
          { text: "Project files", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which directory is the root of the Linux file system?",
        options: [
          { text: "/root", correct: false },
          { text: "/", correct: true },
          { text: "/home", correct: false },
          { text: "/usr", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the purpose of the /bin directory?",
        options: [
          { text: "System binaries", correct: true },
          { text: "User binaries", correct: false },
          { text: "Boot files", correct: false },
          { text: "Temporary files", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which directory contains shared libraries?",
        options: [
          { text: "/lib", correct: true },
          { text: "/usr/lib", correct: false },
          { text: "/var/lib", correct: false },
          { text: "/etc/lib", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the purpose of the /dev directory?",
        options: [
          { text: "Device files", correct: true },
          { text: "User files", correct: false },
          { text: "System logs", correct: false },
          { text: "Configuration files", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which directory is used for mounting removable media?",
        options: [
          { text: "/mnt", correct: true },
          { text: "/media", correct: false },
          { text: "/tmp", correct: false },
          { text: "/var", correct: false }
        ],
        difficulty: "medium"
      }
    ]
  },
  "shell-scripting": {
    "bash-basics": [
      {
        question: "Which line should be the first line of a bash script?",
        options: [
          { text: "#!/bin/bash", correct: true },
          { text: "#/bin/bash", correct: false },
          { text: "//bin/bash", correct: false },
          { text: "%/bin/bash", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you make a script executable?",
        options: [
          { text: "chmod +x script.sh", correct: true },
          { text: "exec script.sh", correct: false },
          { text: "run script.sh", correct: false },
          { text: "enable script.sh", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does '$0' represent in a bash script?",
        options: [
          { text: "First argument", correct: false },
          { text: "Script name", correct: true },
          { text: "Exit status", correct: false },
          { text: "Process ID", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command executes a script in the current shell?",
        options: [
          { text: "./script.sh", correct: false },
          { text: "bash script.sh", correct: false },
          { text: "source script.sh", correct: true },
          { text: "run script.sh", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What does '$?' contain after a command execution?",
        options: [
          { text: "Command output", correct: false },
          { text: "Exit status of last command", correct: true },
          { text: "Process ID", correct: false },
          { text: "Number of arguments", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you redirect stderr to stdout in bash?",
        options: [
          { text: "2>&1", correct: true },
          { text: "1>&2", correct: false },
          { text: "2>1", correct: false },
          { text: "1>2", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What does 'set -e' do in a script?",
        options: [
          { text: "Enables debugging", correct: false },
          { text: "Exits on any error", correct: true },
          { text: "Enables verbose mode", correct: false },
          { text: "Enables error logging", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you temporarily disable 'set -e' for a command?",
        options: [
          { text: "command || true", correct: true },
          { text: "command && false", correct: false },
          { text: "ignore command", correct: false },
          { text: "safe command", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What does 'set -u' do?",
        options: [
          { text: "Enables uppercase mode", correct: false },
          { text: "Treats unset variables as errors", correct: true },
          { text: "Enables user mode", correct: false },
          { text: "Enables unicode support", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you check the syntax of a script without executing it?",
        options: [
          { text: "bash -n script.sh", correct: true },
          { text: "bash -c script.sh", correct: false },
          { text: "bash -t script.sh", correct: false },
          { text: "bash -s script.sh", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "variables-data-types": [
      {
        question: "How do you assign a value to a variable in bash?",
        options: [
          { text: "var = value", correct: false },
          { text: "var=value", correct: true },
          { text: "set var value", correct: false },
          { text: "let var=value", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you access the value of a variable named 'name'?",
        options: [
          { text: "name", correct: false },
          { text: "$name", correct: true },
          { text: "&name", correct: false },
          { text: "%name", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command reads user input into a variable?",
        options: [
          { text: "input", correct: false },
          { text: "read", correct: true },
          { text: "get", correct: false },
          { text: "scan", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'export' do to a variable?",
        options: [
          { text: "Deletes the variable", correct: false },
          { text: "Makes it available to child processes", correct: true },
          { text: "Saves it to a file", correct: false },
          { text: "Converts it to uppercase", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you get the length of a string variable 'str'?",
        options: [
          { text: "${#str}", correct: true },
          { text: "$#str", correct: false },
          { text: "${str#}", correct: false },
          { text: "$str#", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the difference between single and double quotes?",
        options: [
          { text: "No difference", correct: false },
          { text: "Single quotes preserve literal values, double quotes allow variable expansion", correct: true },
          { text: "Double quotes are faster", correct: false },
          { text: "Single quotes are for strings, double quotes for numbers", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you declare an array in bash?",
        options: [
          { text: "array=(value1 value2)", correct: true },
          { text: "array=value1,value2", correct: false },
          { text: "array=[value1,value2]", correct: false },
          { text: "array=value1;value2", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you access the third element of an array named 'arr'?",
        options: [
          { text: "${arr[2]}", correct: true },
          { text: "${arr[3]}", correct: false },
          { text: "${arr[0]}", correct: false },
          { text: "${arr[1]}", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you get the number of elements in an array named 'arr'?",
        options: [
          { text: "${#arr[@]}", correct: true },
          { text: "${#arr}", correct: false },
          { text: "${#arr[*]}", correct: false },
          { text: "${#arr[0]}", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you remove an element from an array?",
        options: [
          { text: "unset arr[index]", correct: true },
          { text: "remove arr[index]", correct: false },
          { text: "delete arr[index]", correct: false },
          { text: "arr[index]=''", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "control-structures": [
      {
        question: "Which keyword ends an if statement in bash?",
        options: [
          { text: "endif", correct: false },
          { text: "fi", correct: true },
          { text: "end", correct: false },
          { text: "done", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you test if a file exists in bash?",
        options: [
          { text: "if [ -f filename ]", correct: true },
          { text: "if [ -e filename ]", correct: false },
          { text: "if [ exists filename ]", correct: false },
          { text: "if [ file filename ]", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which loop structure is used for iterating over a list?",
        options: [
          { text: "while", correct: false },
          { text: "until", correct: false },
          { text: "for", correct: true },
          { text: "repeat", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'break' do in a loop?",
        options: [
          { text: "Pauses the loop", correct: false },
          { text: "Exits the loop", correct: true },
          { text: "Skips current iteration", correct: false },
          { text: "Reverses the loop", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which operator is used for string comparison in bash?",
        options: [
          { text: "==", correct: false },
          { text: "=", correct: true },
          { text: "eq", correct: false },
          { text: "equal", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'continue' do in a loop?",
        options: [
          { text: "Exits the loop", correct: false },
          { text: "Restarts the loop", correct: false },
          { text: "Skips to next iteration", correct: true },
          { text: "Pauses execution", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you test if a variable is empty?",
        options: [
          { text: "if [ -z $var ]", correct: true },
          { text: "if [ $var == '' ]", correct: false },
          { text: "if [ $var = '' ]", correct: false },
          { text: "if [ $var -eq '' ]", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you test if a variable is not empty?",
        options: [
          { text: "if [ -n $var ]", correct: true },
          { text: "if [ $var != '' ]", correct: false },
          { text: "if [ $var -ne '' ]", correct: false },
          { text: "if [ $var ]", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you test if a variable is an integer?",
        options: [
          { text: "if [[ $var =~ ^[0-9]+$ ]]", correct: true },
          { text: "if [ $var -eq $var ]", correct: false },
          { text: "if [ $var -eq 0 ]", correct: false },
          { text: "if [ $var -eq '' ]", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you test if a variable is a float?",
        options: [
          { text: "if [[ $var =~ ^[0-9]+\.[0-9]+$ ]]", correct: true },
          { text: "if [ $var -eq $var ]", correct: false },
          { text: "if [ $var -eq 0 ]", correct: false },
          { text: "if [ $var -eq '' ]", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "functions": [
      {
        question: "How do you define a function in bash?",
        options: [
          { text: "function name() { }", correct: true },
          { text: "def name() { }", correct: false },
          { text: "func name() { }", correct: false },
          { text: "procedure name() { }", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you access the first parameter in a function?",
        options: [
          { text: "$0", correct: false },
          { text: "$1", correct: true },
          { text: "$first", correct: false },
          { text: "$param1", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you return a value from a function?",
        options: [
          { text: "return value", correct: false },
          { text: "echo value", correct: true },
          { text: "output value", correct: false },
          { text: "print value", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does '$#' represent in a function?",
        options: [
          { text: "Function name", correct: false },
          { text: "Number of parameters", correct: true },
          { text: "Last parameter", correct: false },
          { text: "All parameters", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you access all parameters passed to a function?",
        options: [
          { text: "$all", correct: false },
          { text: "$*", correct: true },
          { text: "$params", correct: false },
          { text: "${}", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the scope of variables in bash functions?",
        options: [
          { text: "Always global", correct: false },
          { text: "Always local", correct: false },
          { text: "Global by default, local with 'local' keyword", correct: true },
          { text: "Local by default, global with 'global' keyword", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you declare a local variable in a function?",
        options: [
          { text: "local var=value", correct: true },
          { text: "var=value", correct: false },
          { text: "declare var=value", correct: false },
          { text: "set var=value", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: [
          { text: "myFunction()", correct: true },
          { text: "call myFunction()", correct: false },
          { text: "execute myFunction()", correct: false },
          { text: "run myFunction()", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you pass arguments to a function?",
        options: [
          { text: "myFunction arg1 arg2", correct: true },
          { text: "myFunction(arg1, arg2)", correct: false },
          { text: "myFunction [arg1, arg2]", correct: false },
          { text: "myFunction {arg1, arg2}", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you get the name of the function being executed?",
        options: [
          { text: "${FUNCNAME[0]}", correct: true },
          { text: "$0", correct: false },
          { text: "$1", correct: false },
          { text: "$#", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "script-debugging": [
      {
        question: "Which option enables debug mode in bash?",
        options: [
          { text: "-d", correct: false },
          { text: "-x", correct: true },
          { text: "-v", correct: false },
          { text: "-debug", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you check the syntax of a script without executing it?",
        options: [
          { text: "bash -n script.sh", correct: true },
          { text: "bash -c script.sh", correct: false },
          { text: "bash -t script.sh", correct: false },
          { text: "bash -s script.sh", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'set -e' do in a script?",
        options: [
          { text: "Enables debugging", correct: false },
          { text: "Exits on any error", correct: true },
          { text: "Enables verbose mode", correct: false },
          { text: "Enables error logging", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which command shows the call stack in bash?",
        options: [
          { text: "caller", correct: true },
          { text: "stack", correct: false },
          { text: "trace", correct: false },
          { text: "backtrace", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you temporarily disable 'set -e' for a command?",
        options: [
          { text: "command || true", correct: true },
          { text: "command && false", correct: false },
          { text: "ignore command", correct: false },
          { text: "safe command", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What does 'set -u' do?",
        options: [
          { text: "Enables uppercase mode", correct: false },
          { text: "Treats unset variables as errors", correct: true },
          { text: "Enables user mode", correct: false },
          { text: "Enables unicode support", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you enable tracing in a script?",
        options: [
          { text: "set -x", correct: true },
          { text: "set -t", correct: false },
          { text: "set -v", correct: false },
          { text: "set -d", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you disable tracing in a script?",
        options: [
          { text: "set +x", correct: true },
          { text: "set -x", correct: false },
          { text: "set -t", correct: false },
          { text: "set -v", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you enable verbose mode in a script?",
        options: [
          { text: "set -v", correct: true },
          { text: "set -x", correct: false },
          { text: "set -t", correct: false },
          { text: "set -d", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you disable verbose mode in a script?",
        options: [
          { text: "set +v", correct: true },
          { text: "set -v", correct: false },
          { text: "set -x", correct: false },
          { text: "set -t", correct: false }
        ],
        difficulty: "medium"
      }
    ]
  },
  "user-administration": {
    "user-account-management": [
      {
        question: "Which command creates a new user account?",
        options: [
          { text: "adduser", correct: true },
          { text: "newuser", correct: false },
          { text: "createuser", correct: false },
          { text: "mkuser", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Where are user account details stored?",
        options: [
          { text: "/etc/users", correct: false },
          { text: "/etc/passwd", correct: true },
          { text: "/etc/accounts", correct: false },
          { text: "/var/users", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command deletes a user account?",
        options: [
          { text: "deluser", correct: true },
          { text: "removeuser", correct: false },
          { text: "rmuser", correct: false },
          { text: "dropuser", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the 'usermod' command do?",
        options: [
          { text: "Creates new users", correct: false },
          { text: "Modifies user accounts", correct: true },
          { text: "Lists user accounts", correct: false },
          { text: "Deletes user accounts", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Where are encrypted passwords stored?",
        options: [
          { text: "/etc/passwd", correct: false },
          { text: "/etc/shadow", correct: true },
          { text: "/etc/security", correct: false },
          { text: "/var/passwd", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which field in /etc/passwd contains the user's shell?",
        options: [
          { text: "Field 3", correct: false },
          { text: "Field 5", correct: false },
          { text: "Field 7", correct: true },
          { text: "Field 6", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you change a user's home directory?",
        options: [
          { text: "usermod -d /new/home user", correct: true },
          { text: "usermod -h /new/home user", correct: false },
          { text: "usermod -m /new/home user", correct: false },
          { text: "usermod -p /new/home user", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you lock a user account?",
        options: [
          { text: "usermod -L user", correct: true },
          { text: "usermod -D user", correct: false },
          { text: "usermod -E user", correct: false },
          { text: "usermod -X user", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you unlock a user account?",
        options: [
          { text: "usermod -U user", correct: true },
          { text: "usermod -L user", correct: false },
          { text: "usermod -D user", correct: false },
          { text: "usermod -E user", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you change a user's primary group?",
        options: [
          { text: "usermod -g group user", correct: true },
          { text: "usermod -G group user", correct: false },
          { text: "usermod -a group user", correct: false },
          { text: "usermod -m group user", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "group-management": [
      {
        question: "Which command creates a new group?",
        options: [
          { text: "addgroup", correct: true },
          { text: "newgroup", correct: false },
          { text: "creategroup", correct: false },
          { text: "mkgroup", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Where is group information stored?",
        options: [
          { text: "/etc/groups", correct: false },
          { text: "/etc/group", correct: true },
          { text: "/var/group", correct: false },
          { text: "/usr/group", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you add a user to a group?",
        options: [
          { text: "usermod -a -G groupname username", correct: true },
          { text: "adduser username groupname", correct: false },
          { text: "groupadd username groupname", correct: false },
          { text: "useradd -g groupname username", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows a user's group memberships?",
        options: [
          { text: "groups", correct: true },
          { text: "usergroups", correct: false },
          { text: "showgroups", correct: false },
          { text: "listgroups", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is a primary group?",
        options: [
          { text: "The most important group", correct: false },
          { text: "The user's default group for file creation", correct: true },
          { text: "The first group created", correct: false },
          { text: "The administrative group", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you remove a user from a group?",
        options: [
          { text: "deluser username groupname", correct: true },
          { text: "removeuser username groupname", correct: false },
          { text: "usermod -r username groupname", correct: false },
          { text: "groupdel username groupname", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you delete a group?",
        options: [
          { text: "groupdel groupname", correct: true },
          { text: "delgroup groupname", correct: false },
          { text: "rmgroup groupname", correct: false },
          { text: "dropgroup groupname", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you rename a group?",
        options: [
          { text: "groupmod -n newname oldname", correct: true },
          { text: "groupmod -r newname oldname", correct: false },
          { text: "groupmod -m newname oldname", correct: false },
          { text: "groupmod -a newname oldname", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you add a user to multiple groups?",
        options: [
          { text: "usermod -a -G group1,group2 username", correct: true },
          { text: "usermod -a -G group1 group2 username", correct: false },
          { text: "usermod -a -G group1 username group2", correct: false },
          { text: "usermod -a -G group1,group2", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you change a group's GID?",
        options: [
          { text: "groupmod -g newgid groupname", correct: true },
          { text: "groupmod -n newgid groupname", correct: false },
          { text: "groupmod -r newgid groupname", correct: false },
          { text: "groupmod -m newgid groupname", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "permissions-ownership": [
      {
        question: "What does 'chmod 755' set?",
        options: [
          { text: "rwxr-xr-x", correct: true },
          { text: "rwxrwxrwx", correct: false },
          { text: "r--r--r--", correct: false },
          { text: "rwxrw-rw-", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command changes file ownership?",
        options: [
          { text: "chmod", correct: false },
          { text: "chown", correct: true },
          { text: "chgrp", correct: false },
          { text: "owner", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the 'x' permission mean for directories?",
        options: [
          { text: "Execute files in directory", correct: false },
          { text: "Access/traverse the directory", correct: true },
          { text: "Delete the directory", correct: false },
          { text: "Create files in directory", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command changes only the group ownership?",
        options: [
          { text: "chown", correct: false },
          { text: "chgrp", correct: true },
          { text: "chmod", correct: false },
          { text: "changegroup", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the sticky bit do?",
        options: [
          { text: "Makes files permanent", correct: false },
          { text: "Prevents deletion by non-owners", correct: true },
          { text: "Makes files executable", correct: false },
          { text: "Keeps files in memory", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the octal value for the setuid bit?",
        options: [
          { text: "1000", correct: false },
          { text: "2000", correct: false },
          { text: "4000", correct: true },
          { text: "8000", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the setgid bit on a directory?",
        options: [
          { text: "chmod 2755 dirname", correct: true },
          { text: "chmod 4755 dirname", correct: false },
          { text: "chmod 6755 dirname", correct: false },
          { text: "chmod 8755 dirname", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the sticky bit on a directory?",
        options: [
          { text: "chmod 1755 dirname", correct: true },
          { text: "chmod 2755 dirname", correct: false },
          { text: "chmod 4755 dirname", correct: false },
          { text: "chmod 8755 dirname", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the setuid bit on a file?",
        options: [
          { text: "chmod 4755 filename", correct: true },
          { text: "chmod 2755 filename", correct: false },
          { text: "chmod 1755 filename", correct: false },
          { text: "chmod 8755 filename", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the setgid bit on a file?",
        options: [
          { text: "chmod 2755 filename", correct: true },
          { text: "chmod 4755 filename", correct: false },
          { text: "chmod 1755 filename", correct: false },
          { text: "chmod 8755 filename", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "user-environment": [
      {
        question: "Which file contains system-wide environment variables?",
        options: [
          { text: "/etc/environment", correct: true },
          { text: "/etc/profile", correct: false },
          { text: "/etc/bashrc", correct: false },
          { text: "/etc/exports", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the purpose of .bashrc?",
        options: [
          { text: "System configuration", correct: false },
          { text: "User shell configuration for interactive shells", correct: true },
          { text: "Boot configuration", correct: false },
          { text: "Network configuration", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which environment variable contains the user's home directory path?",
        options: [
          { text: "$USER", correct: false },
          { text: "$HOME", correct: true },
          { text: "$PATH", correct: false },
          { text: "$SHELL", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the difference between .bashrc and .bash_profile?",
        options: [
          { text: "No difference", correct: false },
          { text: ".bashrc for interactive, .bash_profile for login shells", correct: true },
          { text: ".bashrc is global, .bash_profile is local", correct: false },
          { text: ".bashrc is newer than .bash_profile", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you make an environment variable permanent for a user?",
        options: [
          { text: "Add it to /etc/environment", correct: false },
          { text: "Add it to ~/.bashrc or ~/.profile", correct: true },
          { text: "Use the export command", correct: false },
          { text: "Add it to /etc/profile", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows all environment variables?",
        options: [
          { text: "env", correct: true },
          { text: "vars", correct: false },
          { text: "show", correct: false },
          { text: "list", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you set an environment variable for the current session?",
        options: [
          { text: "export VAR=value", correct: true },
          { text: "set VAR=value", correct: false },
          { text: "declare VAR=value", correct: false },
          { text: "let VAR=value", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you unset an environment variable?",
        options: [
          { text: "unset VAR", correct: true },
          { text: "remove VAR", correct: false },
          { text: "delete VAR", correct: false },
          { text: "clear VAR", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you make an environment variable permanent for all users?",
        options: [
          { text: "Add it to /etc/environment", correct: true },
          { text: "Add it to ~/.bashrc or ~/.profile", correct: false },
          { text: "Use the export command", correct: false },
          { text: "Add it to /etc/profile", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you source a file to apply its environment variables?",
        options: [
          { text: "source filename", correct: true },
          { text: "import filename", correct: false },
          { text: "load filename", correct: false },
          { text: "exec filename", correct: false }
        ],
        difficulty: "medium"
      }
    ]
  },
  "file-systems": {
    "file-system-types": [
      {
        question: "Which is the most common Linux file system?",
        options: [
          { text: "NTFS", correct: false },
          { text: "ext4", correct: true },
          { text: "FAT32", correct: false },
          { text: "HFS+", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does XFS stand for?",
        options: [
          { text: "eXtended File System", correct: false },
          { text: "eXtra Fast System", correct: false },
          { text: "eXtents File System", correct: true },
          { text: "eXternal File System", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which file system supports snapshots natively?",
        options: [
          { text: "ext4", correct: false },
          { text: "Btrfs", correct: true },
          { text: "FAT32", correct: false },
          { text: "ext3", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the maximum file size for ext4?",
        options: [
          { text: "2GB", correct: false },
          { text: "4GB", correct: false },
          { text: "16TB", correct: true },
          { text: "1TB", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which file system is commonly used for swap space?",
        options: [
          { text: "ext4", correct: false },
          { text: "swap", correct: true },
          { text: "tmpfs", correct: false },
          { text: "proc", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What type of file system is /proc?",
        options: [
          { text: "Physical file system", correct: false },
          { text: "Virtual file system", correct: true },
          { text: "Network file system", correct: false },
          { text: "Encrypted file system", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which file system is known for its journaling capabilities?",
        options: [
          { text: "ext2", correct: false },
          { text: "ext3", correct: true },
          { text: "FAT32", correct: false },
          { text: "NTFS", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which file system is known for its high performance and scalability?",
        options: [
          { text: "ext4", correct: false },
          { text: "XFS", correct: true },
          { text: "Btrfs", correct: false },
          { text: "FAT32", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which file system is known for its copy-on-write capabilities?",
        options: [
          { text: "ext4", correct: false },
          { text: "Btrfs", correct: true },
          { text: "XFS", correct: false },
          { text: "FAT32", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which file system is known for its support for large files and directories?",
        options: [
          { text: "ext4", correct: false },
          { text: "XFS", correct: true },
          { text: "Btrfs", correct: false },
          { text: "FAT32", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "mounting-unmounting": [
      {
        question: "Which command mounts a file system?",
        options: [
          { text: "mount", correct: true },
          { text: "attach", correct: false },
          { text: "connect", correct: false },
          { text: "link", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Where are permanent mount points configured?",
        options: [
          { text: "/etc/mounts", correct: false },
          { text: "/etc/fstab", correct: true },
          { text: "/etc/filesystems", correct: false },
          { text: "/var/mounts", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command unmounts a file system?",
        options: [
          { text: "unmount", correct: false },
          { text: "umount", correct: true },
          { text: "detach", correct: false },
          { text: "disconnect", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does the 'noexec' mount option do?",
        options: [
          { text: "Prevents file execution", correct: true },
          { text: "Disables file access", correct: false },
          { text: "Makes filesystem read-only", correct: false },
          { text: "Hides the filesystem", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows currently mounted file systems?",
        options: [
          { text: "mount", correct: true },
          { text: "df", correct: false },
          { text: "lsfs", correct: false },
          { text: "showmount", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'mount -a' do?",
        options: [
          { text: "Mounts all available devices", correct: false },
          { text: "Mounts all entries in /etc/fstab", correct: true },
          { text: "Shows all mount points", correct: false },
          { text: "Unmounts all filesystems", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you mount a file system with read-only access?",
        options: [
          { text: "mount -o ro /dev/sda1 /mnt", correct: true },
          { text: "mount -o rw /dev/sda1 /mnt", correct: false },
          { text: "mount -o noexec /dev/sda1 /mnt", correct: false },
          { text: "mount -o nosuid /dev/sda1 /mnt", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you mount a file system with noexec option?",
        options: [
          { text: "mount -o noexec /dev/sda1 /mnt", correct: true },
          { text: "mount -o exec /dev/sda1 /mnt", correct: false },
          { text: "mount -o ro /dev/sda1 /mnt", correct: false },
          { text: "mount -o rw /dev/sda1 /mnt", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you mount a file system with nosuid option?",
        options: [
          { text: "mount -o nosuid /dev/sda1 /mnt", correct: true },
          { text: "mount -o suid /dev/sda1 /mnt", correct: false },
          { text: "mount -o ro /dev/sda1 /mnt", correct: false },
          { text: "mount -o rw /dev/sda1 /mnt", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you mount a file system with nodev option?",
        options: [
          { text: "mount -o nodev /dev/sda1 /mnt", correct: true },
          { text: "mount -o dev /dev/sda1 /mnt", correct: false },
          { text: "mount -o ro /dev/sda1 /mnt", correct: false },
          { text: "mount -o rw /dev/sda1 /mnt", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "disk-management": [
      {
        question: "Which command shows disk usage by directory?",
        options: [
          { text: "df", correct: false },
          { text: "du", correct: true },
          { text: "disk", correct: false },
          { text: "usage", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'df -h' display?",
        options: [
          { text: "Directory usage", correct: false },
          { text: "File system disk space in human readable format", correct: true },
          { text: "Hard disk information", correct: false },
          { text: "File permissions", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command partitions a disk?",
        options: [
          { text: "partition", correct: false },
          { text: "fdisk", correct: true },
          { text: "diskpart", correct: false },
          { text: "parted", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is LVM?",
        options: [
          { text: "Linux Virtual Memory", correct: false },
          { text: "Logical Volume Manager", correct: true },
          { text: "Linux Volume Monitor", correct: false },
          { text: "Local Volume Management", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command creates a file system?",
        options: [
          { text: "createfs", correct: false },
          { text: "mkfs", correct: true },
          { text: "newfs", correct: false },
          { text: "makefs", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'lsblk' command show?",
        options: [
          { text: "List of users", correct: false },
          { text: "Block devices in tree format", correct: true },
          { text: "List of blocks", correct: false },
          { text: "Locked files", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you create a physical volume in LVM?",
        options: [
          { text: "pvcreate /dev/sda1", correct: true },
          { text: "vgcreate /dev/sda1", correct: false },
          { text: "lvcreate /dev/sda1", correct: false },
          { text: "mkfs /dev/sda1", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you create a volume group in LVM?",
        options: [
          { text: "vgcreate vgname /dev/sda1", correct: true },
          { text: "pvcreate vgname /dev/sda1", correct: false },
          { text: "lvcreate vgname /dev/sda1", correct: false },
          { text: "mkfs vgname /dev/sda1", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you create a logical volume in LVM?",
        options: [
          { text: "lvcreate -n lvname -L 1G vgname", correct: true },
          { text: "vgcreate -n lvname -L 1G vgname", correct: false },
          { text: "pvcreate -n lvname -L 1G vgname", correct: false },
          { text: "mkfs -n lvname -L 1G vgname", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you format a logical volume in LVM?",
        options: [
          { text: "mkfs.ext4 /dev/vgname/lvname", correct: true },
          { text: "mkfs.ext4 /dev/sda1", correct: false },
          { text: "mkfs.ext4 /dev/vgname", correct: false },
          { text: "mkfs.ext4 /dev/lvname", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "file-system-maintenance": [
      {
        question: "Which command checks file system integrity?",
        options: [
          { text: "check", correct: false },
          { text: "fsck", correct: true },
          { text: "verify", correct: false },
          { text: "test", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'fsck -f' do?",
        options: [
          { text: "Forces a check even if filesystem appears clean", correct: true },
          { text: "Fixes errors automatically", correct: false },
          { text: "Fast check", correct: false },
          { text: "Full system check", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command defragments an ext4 filesystem?",
        options: [
          { text: "defrag", correct: false },
          { text: "e4defrag", correct: true },
          { text: "fsdefrag", correct: false },
          { text: "ext4defrag", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the purpose of 'tune2fs'?",
        options: [
          { text: "Tunes system performance", correct: false },
          { text: "Adjusts ext2/ext3/ext4 filesystem parameters", correct: true },
          { text: "Optimizes file access", correct: false },
          { text: "Configures swap space", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How often should you run fsck on a filesystem?",
        options: [
          { text: "Daily", correct: false },
          { text: "Only when problems are suspected", correct: true },
          { text: "Weekly", correct: false },
          { text: "Never", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows filesystem statistics?",
        options: [
          { text: "stat", correct: false },
          { text: "dumpe2fs", correct: true },
          { text: "fsinfo", correct: false },
          { text: "fsstat", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you resize an ext4 filesystem?",
        options: [
          { text: "resize2fs /dev/sda1", correct: true },
          { text: "resizefs /dev/sda1", correct: false },
          { text: "resize /dev/sda1", correct: false },
          { text: "resizeext4 /dev/sda1", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you check the status of a filesystem?",
        options: [
          { text: "fsck -n /dev/sda1", correct: true },
          { text: "fsck -f /dev/sda1", correct: false },
          { text: "fsck -y /dev/sda1", correct: false },
          { text: "fsck -a /dev/sda1", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you repair a filesystem?",
        options: [
          { text: "fsck -y /dev/sda1", correct: true },
          { text: "fsck -n /dev/sda1", correct: false },
          { text: "fsck -f /dev/sda1", correct: false },
          { text: "fsck -a /dev/sda1", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you force a filesystem check?",
        options: [
          { text: "fsck -f /dev/sda1", correct: true },
          { text: "fsck -n /dev/sda1", correct: false },
          { text: "fsck -y /dev/sda1", correct: false },
          { text: "fsck -a /dev/sda1", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "permissions-attributes": [
      {
        question: "What does 'lsattr' command show?",
        options: [
          { text: "File permissions", correct: false },
          { text: "File attributes", correct: true },
          { text: "File ownership", correct: false },
          { text: "File size", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command sets file attributes?",
        options: [
          { text: "setattr", correct: false },
          { text: "chattr", correct: true },
          { text: "attr", correct: false },
          { text: "fileattr", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does the 'i' attribute do to a file?",
        options: [
          { text: "Makes it invisible", correct: false },
          { text: "Makes it immutable", correct: true },
          { text: "Makes it indexed", correct: false },
          { text: "Makes it interactive", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which umask value gives 644 permissions for new files?",
        options: [
          { text: "022", correct: true },
          { text: "644", correct: false },
          { text: "755", correct: false },
          { text: "133", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What does the 'a' attribute do?",
        options: [
          { text: "Allows all access", correct: false },
          { text: "Append-only mode", correct: true },
          { text: "Archive bit", correct: false },
          { text: "Admin access", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you view the default umask?",
        options: [
          { text: "umask", correct: true },
          { text: "getumask", correct: false },
          { text: "showmask", correct: false },
          { text: "mask", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you set the immutable attribute on a file?",
        options: [
          { text: "chattr +i filename", correct: true },
          { text: "chattr -i filename", correct: false },
          { text: "chattr +a filename", correct: false },
          { text: "chattr -a filename", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you remove the immutable attribute from a file?",
        options: [
          { text: "chattr -i filename", correct: true },
          { text: "chattr +i filename", correct: false },
          { text: "chattr +a filename", correct: false },
          { text: "chattr -a filename", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the append-only attribute on a file?",
        options: [
          { text: "chattr +a filename", correct: true },
          { text: "chattr -a filename", correct: false },
          { text: "chattr +i filename", correct: false },
          { text: "chattr -i filename", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you remove the append-only attribute from a file?",
        options: [
          { text: "chattr -a filename", correct: true },
          { text: "chattr +a filename", correct: false },
          { text: "chattr +i filename", correct: false },
          { text: "chattr -i filename", correct: false }
        ],
        difficulty: "hard"
      }
    ]
  },
  "networking": {
    "network-interfaces": [
      {
        question: "Which command shows network interface configuration?",
        options: [
          { text: "netconfig", correct: false },
          { text: "ifconfig", correct: true },
          { text: "netstat", correct: false },
          { text: "ipconfig", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the modern replacement for ifconfig?",
        options: [
          { text: "netconfig", correct: false },
          { text: "ip", correct: true },
          { text: "net", correct: false },
          { text: "interface", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which file contains network interface configuration on Debian?",
        options: [
          { text: "/etc/network/interfaces", correct: true },
          { text: "/etc/networking/config", correct: false },
          { text: "/etc/net/interfaces", correct: false },
          { text: "/var/network/config", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you bring up a network interface?",
        options: [
          { text: "ifup interface", correct: true },
          { text: "netup interface", correct: false },
          { text: "up interface", correct: false },
          { text: "start interface", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'ip addr show' display?",
        options: [
          { text: "IP routing table", correct: false },
          { text: "Network interface addresses", correct: true },
          { text: "ARP table", correct: false },
          { text: "DNS configuration", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows network interface statistics?",
        options: [
          { text: "netstats", correct: false },
          { text: "ifstat", correct: false },
          { text: "ip -s link", correct: true },
          { text: "netinfo", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you bring down a network interface?",
        options: [
          { text: "ifdown interface", correct: true },
          { text: "netdown interface", correct: false },
          { text: "down interface", correct: false },
          { text: "stop interface", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you add an IP address to an interface?",
        options: [
          { text: "ip addr add 192.168.1.10/24 dev eth0", correct: true },
          { text: "ifconfig eth0 add 192.168.1.10/24", correct: false },
          { text: "netadd eth0 192.168.1.10/24", correct: false },
          { text: "addip eth0 192.168.1.10/24", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you delete an IP address from an interface?",
        options: [
          { text: "ip addr del 192.168.1.10/24 dev eth0", correct: true },
          { text: "ifconfig eth0 del 192.168.1.10/24", correct: false },
          { text: "netdel eth0 192.168.1.10/24", correct: false },
          { text: "delip eth0 192.168.1.10/24", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you set the MTU of an interface?",
        options: [
          { text: "ip link set eth0 mtu 1500", correct: true },
          { text: "ifconfig eth0 mtu 1500", correct: false },
          { text: "netset eth0 mtu 1500", correct: false },
          { text: "setmtu eth0 1500", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "ip-addressing": [
      {
        question: "What is the subnet mask for a /24 network?",
        options: [
          { text: "255.255.0.0", correct: false },
          { text: "255.255.255.0", correct: true },
          { text: "255.255.255.255", correct: false },
          { text: "255.0.0.0", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How many host addresses are available in a /28 subnet?",
        options: [
          { text: "16", correct: false },
          { text: "14", correct: true },
          { text: "30", correct: false },
          { text: "32", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the first private IP address range (Class A)?",
        options: [
          { text: "192.168.0.0/16", correct: false },
          { text: "10.0.0.0/8", correct: true },
          { text: "172.16.0.0/12", correct: false },
          { text: "169.254.0.0/16", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command adds an IP address to an interface?",
        options: [
          { text: "ip addr add", correct: true },
          { text: "ifconfig add", correct: false },
          { text: "netadd", correct: false },
          { text: "addip", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does CIDR stand for?",
        options: [
          { text: "Classless Inter-Domain Routing", correct: true },
          { text: "Class Internet Domain Routing", correct: false },
          { text: "Central Internet Data Repository", correct: false },
          { text: "Common IP Domain Resolution", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the loopback address?",
        options: [
          { text: "192.168.1.1", correct: false },
          { text: "127.0.0.1", correct: true },
          { text: "10.0.0.1", correct: false },
          { text: "0.0.0.0", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the default subnet mask for a /30 network?",
        options: [
          { text: "255.255.255.252", correct: true },
          { text: "255.255.255.0", correct: false },
          { text: "255.255.255.248", correct: false },
          { text: "255.255.255.240", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How many host addresses are available in a /29 subnet?",
        options: [
          { text: "6", correct: true },
          { text: "8", correct: false },
          { text: "14", correct: false },
          { text: "30", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the first private IP address range (Class B)?",
        options: [
          { text: "192.168.0.0/16", correct: true },
          { text: "10.0.0.0/8", correct: false },
          { text: "172.16.0.0/12", correct: false },
          { text: "169.254.0.0/16", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the first private IP address range (Class C)?",
        options: [
          { text: "192.168.0.0/16", correct: false },
          { text: "10.0.0.0/8", correct: false },
          { text: "172.16.0.0/12", correct: true },
          { text: "169.254.0.0/16", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "network-troubleshooting": [
      {
        question: "Which command tests network connectivity?",
        options: [
          { text: "test", correct: false },
          { text: "ping", correct: true },
          { text: "connect", correct: false },
          { text: "check", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'traceroute' show?",
        options: [
          { text: "Network speed", correct: false },
          { text: "Path packets take to destination", correct: true },
          { text: "Open ports", correct: false },
          { text: "DNS records", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows network connections and listening ports?",
        options: [
          { text: "netconnect", correct: false },
          { text: "netstat", correct: true },
          { text: "shownet", correct: false },
          { text: "ports", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'nslookup' do?",
        options: [
          { text: "Network speed lookup", correct: false },
          { text: "DNS lookups", correct: true },
          { text: "Network statistics", correct: false },
          { text: "Socket connections", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows the ARP table?",
        options: [
          { text: "arp", correct: true },
          { text: "arptable", correct: false },
          { text: "showarp", correct: false },
          { text: "mac", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'ss' command show?",
        options: [
          { text: "System status", correct: false },
          { text: "Socket statistics", correct: true },
          { text: "Screen sessions", correct: false },
          { text: "Service status", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you clear the ARP cache?",
        options: [
          { text: "ip -s -s neigh flush all", correct: true },
          { text: "arp -c", correct: false },
          { text: "arp -d", correct: false },
          { text: "arp -f", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you add a static ARP entry?",
        options: [
          { text: "ip neigh add 192.168.1.1 lladdr 00:11:22:33:44:55 dev eth0", correct: true },
          { text: "arp -s 192.168.1.1 00:11:22:33:44:55", correct: false },
          { text: "arp -a 192.168.1.1 00:11:22:33:44:55", correct: false },
          { text: "arp -i 192.168.1.1 00:11:22:33:44:55", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you delete a static ARP entry?",
        options: [
          { text: "ip neigh del 192.168.1.1 dev eth0", correct: true },
          { text: "arp -d 192.168.1.1", correct: false },
          { text: "arp -s 192.168.1.1", correct: false },
          { text: "arp -a 192.168.1.1", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you show the routing table?",
        options: [
          { text: "ip route show", correct: true },
          { text: "route -n", correct: false },
          { text: "netstat -r", correct: false },
          { text: "showroute", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "firewall-configuration": [
      {
        question: "What is the default firewall on Ubuntu?",
        options: [
          { text: "iptables", correct: false },
          { text: "ufw", correct: true },
          { text: "firewalld", correct: false },
          { text: "netfilter", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you enable UFW?",
        options: [
          { text: "ufw start", correct: false },
          { text: "ufw enable", correct: true },
          { text: "ufw on", correct: false },
          { text: "ufw activate", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command allows SSH through UFW?",
        options: [
          { text: "ufw allow ssh", correct: true },
          { text: "ufw open ssh", correct: false },
          { text: "ufw permit ssh", correct: false },
          { text: "ufw enable ssh", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'iptables -L' do?",
        options: [
          { text: "Lists firewall rules", correct: true },
          { text: "Loads firewall rules", correct: false },
          { text: "Logs firewall activity", correct: false },
          { text: "Links firewall chains", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which UFW command blocks all incoming traffic by default?",
        options: [
          { text: "ufw default deny", correct: false },
          { text: "ufw default deny incoming", correct: true },
          { text: "ufw block all", correct: false },
          { text: "ufw deny incoming", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'ufw status numbered' show?",
        options: [
          { text: "Number of active rules", correct: false },
          { text: "Rules with line numbers for deletion", correct: true },
          { text: "Numbered ports", correct: false },
          { text: "Statistical information", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you deny a specific IP in UFW?",
        options: [
          { text: "ufw deny from IP", correct: true },
          { text: "ufw block IP", correct: false },
          { text: "ufw reject IP", correct: false },
          { text: "ufw ban IP", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you allow a specific port in UFW?",
        options: [
          { text: "ufw allow port", correct: true },
          { text: "ufw open port", correct: false },
          { text: "ufw permit port", correct: false },
          { text: "ufw enable port", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you delete a UFW rule?",
        options: [
          { text: "ufw delete rule", correct: true },
          { text: "ufw remove rule", correct: false },
          { text: "ufw deny rule", correct: false },
          { text: "ufw block rule", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you reset UFW to its default state?",
        options: [
          { text: "ufw reset", correct: true },
          { text: "ufw disable", correct: false },
          { text: "ufw stop", correct: false },
          { text: "ufw delete all", correct: false }
        ],
        difficulty: "hard"
      }
    ]
  },
  "linux-security": {
    "user-authentication": [
      {
        question: "Which command changes a user's password?",
        options: [
          { text: "password", correct: false },
          { text: "passwd", correct: true },
          { text: "chpasswd", correct: false },
          { text: "setpass", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Where are password policies typically configured?",
        options: [
          { text: "/etc/passwd", correct: false },
          { text: "/etc/login.defs", correct: true },
          { text: "/etc/security", correct: false },
          { text: "/etc/password", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does PAM stand for?",
        options: [
          { text: "Password Authentication Module", correct: false },
          { text: "Pluggable Authentication Modules", correct: true },
          { text: "Primary Access Management", correct: false },
          { text: "Protected Authentication Method", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which command locks a user account?",
        options: [
          { text: "userlock", correct: false },
          { text: "passwd -l", correct: true },
          { text: "lockuser", correct: false },
          { text: "disable", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is sudo used for?",
        options: [
          { text: "Switching users", correct: false },
          { text: "Executing commands as another user", correct: true },
          { text: "System updates", correct: false },
          { text: "Service management", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Where is sudo configuration stored?",
        options: [
          { text: "/etc/sudo", correct: false },
          { text: "/etc/sudoers", correct: true },
          { text: "/etc/su", correct: false },
          { text: "/var/sudo", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you unlock a user account?",
        options: [
          { text: "passwd -u", correct: true },
          { text: "passwd -l", correct: false },
          { text: "unlockuser", correct: false },
          { text: "enable", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you change a user's password without knowing the current password?",
        options: [
          { text: "passwd -f user", correct: true },
          { text: "passwd -l user", correct: false },
          { text: "passwd -u user", correct: false },
          { text: "passwd -d user", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you expire a user's password?",
        options: [
          { text: "passwd -e user", correct: true },
          { text: "passwd -f user", correct: false },
          { text: "passwd -l user", correct: false },
          { text: "passwd -u user", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set a password expiration date?",
        options: [
          { text: "chage -E date user", correct: true },
          { text: "passwd -E date user", correct: false },
          { text: "passwd -d date user", correct: false },
          { text: "passwd -l date user", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "file-permissions": [
      {
        question: "What does 'chmod 600' set?",
        options: [
          { text: "rw-------", correct: true },
          { text: "rwxrwxrwx", correct: false },
          { text: "rw-rw-rw-", correct: false },
          { text: "r--r--r--", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which permission allows reading a file?",
        options: [
          { text: "x", correct: false },
          { text: "r", correct: true },
          { text: "w", correct: false },
          { text: "e", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the effect of SUID on executables?",
        options: [
          { text: "Runs with owner's privileges", correct: true },
          { text: "Prevents execution", correct: false },
          { text: "Logs execution", correct: false },
          { text: "Speeds up execution", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you find files with SUID bit set?",
        options: [
          { text: "find / -perm -4000", correct: true },
          { text: "find / -suid", correct: false },
          { text: "ls -suid", correct: false },
          { text: "locate suid", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What does umask control?",
        options: [
          { text: "File visibility", correct: false },
          { text: "Default permissions for new files", correct: true },
          { text: "User access", correct: false },
          { text: "File encryption", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows a file's detailed permissions?",
        options: [
          { text: "ls -l", correct: true },
          { text: "permissions", correct: false },
          { text: "stat", correct: false },
          { text: "fileinfo", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you set the SUID bit on a file?",
        options: [
          { text: "chmod 4755 filename", correct: true },
          { text: "chmod 2755 filename", correct: false },
          { text: "chmod 1755 filename", correct: false },
          { text: "chmod 8755 filename", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the SGID bit on a file?",
        options: [
          { text: "chmod 2755 filename", correct: true },
          { text: "chmod 4755 filename", correct: false },
          { text: "chmod 1755 filename", correct: false },
          { text: "chmod 8755 filename", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you set the sticky bit on a directory?",
        options: [
          { text: "chmod 1755 dirname", correct: true },
          { text: "chmod 2755 dirname", correct: false },
          { text: "chmod 4755 dirname", correct: false },
          { text: "chmod 8755 dirname", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you remove the SUID bit from a file?",
        options: [
          { text: "chmod 0755 filename", correct: true },
          { text: "chmod 4755 filename", correct: false },
          { text: "chmod 2755 filename", correct: false },
          { text: "chmod 1755 filename", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "firewall-security": [
      {
        question: "What is the principle of least privilege in firewall rules?",
        options: [
          { text: "Allow everything by default", correct: false },
          { text: "Deny all, allow only what's needed", correct: true },
          { text: "Allow some, deny some", correct: false },
          { text: "No restrictions", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which ports should typically be blocked from external access?",
        options: [
          { text: "80, 443", correct: false },
          { text: "Administrative ports like 22, 3389", correct: true },
          { text: "All ports", correct: false },
          { text: "No ports", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is port knocking?",
        options: [
          { text: "Testing port connectivity", correct: false },
          { text: "Opening ports by accessing them in sequence", correct: true },
          { text: "Closing ports forcefully", correct: false },
          { text: "Port scanning technique", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you deny a specific IP in UFW?",
        options: [
          { text: "ufw deny from IP", correct: true },
          { text: "ufw block IP", correct: false },
          { text: "ufw reject IP", correct: false },
          { text: "ufw ban IP", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does DPI stand for in firewall context?",
        options: [
          { text: "Data Protection Interface", correct: false },
          { text: "Deep Packet Inspection", correct: true },
          { text: "Dynamic Port Identification", correct: false },
          { text: "Direct Protocol Inspection", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which tool can be used for advanced iptables management?",
        options: [
          { text: "ufw", correct: false },
          { text: "firewalld", correct: true },
          { text: "netfilter", correct: false },
          { text: "ipconfig", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you allow a specific port in UFW?",
        options: [
          { text: "ufw allow port", correct: true },
          { text: "ufw open port", correct: false },
          { text: "ufw permit port", correct: false },
          { text: "ufw enable port", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you delete a UFW rule?",
        options: [
          { text: "ufw delete rule", correct: true },
          { text: "ufw remove rule", correct: false },
          { text: "ufw deny rule", correct: false },
          { text: "ufw block rule", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you reset UFW to its default state?",
        options: [
          { text: "ufw reset", correct: true },
          { text: "ufw disable", correct: false },
          { text: "ufw stop", correct: false },
          { text: "ufw delete all", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you enable UFW logging?",
        options: [
          { text: "ufw logging on", correct: true },
          { text: "ufw log on", correct: false },
          { text: "ufw enable log", correct: false },
          { text: "ufw start log", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "security-best-practices": [
      {
        question: "What should you do immediately after installing Linux?",
        options: [
          { text: "Install games", correct: false },
          { text: "Update the system and change default passwords", correct: true },
          { text: "Create more users", correct: false },
          { text: "Install GUI", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Why should you disable root SSH login?",
        options: [
          { text: "Root is too slow", correct: false },
          { text: "Reduces attack surface", correct: true },
          { text: "Root doesn't work over SSH", correct: false },
          { text: "It's not necessary", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the recommended approach for software installation?",
        options: [
          { text: "Download from any website", correct: false },
          { text: "Use official repositories", correct: true },
          { text: "Compile everything from source", correct: false },
          { text: "Only use GUI installers", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How often should you update your Linux system?",
        options: [
          { text: "Never", correct: false },
          { text: "Regularly, especially security updates", correct: true },
          { text: "Once a year", correct: false },
          { text: "Only when it breaks", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is fail2ban used for?",
        options: [
          { text: "System backup", correct: false },
          { text: "Intrusion prevention by banning IPs", correct: true },
          { text: "File synchronization", correct: false },
          { text: "User management", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which practice helps secure SSH?",
        options: [
          { text: "Use default port 22", correct: false },
          { text: "Use key-based authentication", correct: true },
          { text: "Allow password authentication", correct: false },
          { text: "Enable root login", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you disable root SSH login?",
        options: [
          { text: "Edit /etc/ssh/sshd_config and set PermitRootLogin no", correct: true },
          { text: "Disable SSH service", correct: false },
          { text: "Remove root user", correct: false },
          { text: "Change root password", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you enable SSH key-based authentication?",
        options: [
          { text: "Edit /etc/ssh/sshd_config and set PasswordAuthentication no", correct: true },
          { text: "Disable SSH service", correct: false },
          { text: "Remove root user", correct: false },
          { text: "Change root password", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you change the default SSH port?",
        options: [
          { text: "Edit /etc/ssh/sshd_config and set Port number", correct: true },
          { text: "Disable SSH service", correct: false },
          { text: "Remove root user", correct: false },
          { text: "Change root password", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you disable password authentication for SSH?",
        options: [
          { text: "Edit /etc/ssh/sshd_config and set PasswordAuthentication no", correct: true },
          { text: "Disable SSH service", correct: false },
          { text: "Remove root user", correct: false },
          { text: "Change root password", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "encryption": [
      {
        question: "Which tool encrypts entire disk partitions?",
        options: [
          { text: "GPG", correct: false },
          { text: "LUKS", correct: true },
          { text: "SSH", correct: false },
          { text: "SSL", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does GPG stand for?",
        options: [
          { text: "General Public Guard", correct: false },
          { text: "GNU Privacy Guard", correct: true },
          { text: "Global Protection Gateway", correct: false },
          { text: "Genetic Program Generator", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command creates an encrypted archive?",
        options: [
          { text: "tar -czf", correct: false },
          { text: "gpg -c", correct: true },
          { text: "zip -e", correct: false },
          { text: "encrypt", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What is the purpose of /dev/urandom?",
        options: [
          { text: "User randomization", correct: false },
          { text: "Generating random data", correct: true },
          { text: "Process randomization", correct: false },
          { text: "URL randomization", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which protocol provides encrypted remote access?",
        options: [
          { text: "Telnet", correct: false },
          { text: "SSH", correct: true },
          { text: "FTP", correct: false },
          { text: "HTTP", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does symmetric encryption mean?",
        options: [
          { text: "Uses different keys for encryption and decryption", correct: false },
          { text: "Uses the same key for encryption and decryption", correct: true },
          { text: "Uses no keys", correct: false },
          { text: "Uses multiple keys simultaneously", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you encrypt a file using GPG?",
        options: [
          { text: "gpg -c filename", correct: true },
          { text: "gpg -e filename", correct: false },
          { text: "gpg -d filename", correct: false },
          { text: "gpg -s filename", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you decrypt a file using GPG?",
        options: [
          { text: "gpg -d filename", correct: true },
          { text: "gpg -c filename", correct: false },
          { text: "gpg -e filename", correct: false },
          { text: "gpg -s filename", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you generate a GPG key pair?",
        options: [
          { text: "gpg --gen-key", correct: true },
          { text: "gpg --create-key", correct: false },
          { text: "gpg --new-key", correct: false },
          { text: "gpg --make-key", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you list your GPG keys?",
        options: [
          { text: "gpg --list-keys", correct: true },
          { text: "gpg --show-keys", correct: false },
          { text: "gpg --display-keys", correct: false },
          { text: "gpg --keys", correct: false }
        ],
        difficulty: "medium"
      }
    ]
  },
  "admin-tasks": {
    "system-monitoring": [
      {
        question: "Which command shows currently running processes?",
        options: [
          { text: "processes", correct: false },
          { text: "ps", correct: true },
          { text: "running", correct: false },
          { text: "proc", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'top' command display?",
        options: [
          { text: "File system usage", correct: false },
          { text: "Real-time system processes", correct: true },
          { text: "Network connections", correct: false },
          { text: "User information", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command shows system memory usage?",
        options: [
          { text: "memory", correct: false },
          { text: "free", correct: true },
          { text: "mem", correct: false },
          { text: "ram", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'htop' offer over 'top'?",
        options: [
          { text: "Nothing different", correct: false },
          { text: "Interactive interface with colors", correct: true },
          { text: "Faster performance", correct: false },
          { text: "More processes shown", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows system uptime and load average?",
        options: [
          { text: "uptime", correct: true },
          { text: "load", correct: false },
          { text: "sysinfo", correct: false },
          { text: "status", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'iostat' monitor?",
        options: [
          { text: "Network I/O", correct: false },
          { text: "Disk I/O statistics", correct: true },
          { text: "Memory I/O", correct: false },
          { text: "Process I/O", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you show all processes for all users?",
        options: [
          { text: "ps aux", correct: true },
          { text: "ps -ef", correct: false },
          { text: "ps -all", correct: false },
          { text: "ps -users", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you show all processes for a specific user?",
        options: [
          { text: "ps -u username", correct: true },
          { text: "ps -user username", correct: false },
          { text: "ps -all username", correct: false },
          { text: "ps -users username", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you show all processes in a tree format?",
        options: [
          { text: "pstree", correct: true },
          { text: "ps tree", correct: false },
          { text: "ps -tree", correct: false },
          { text: "ps -format tree", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you show all processes in a tree format for a specific user?",
        options: [
          { text: "pstree -u username", correct: true },
          { text: "pstree -user username", correct: false },
          { text: "pstree -all username", correct: false },
          { text: "pstree -users username", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "process-management": [
      {
        question: "Which signal terminates a process gracefully?",
        options: [
          { text: "SIGKILL", correct: false },
          { text: "SIGTERM", correct: true },
          { text: "SIGSTOP", correct: false },
          { text: "SIGHUP", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'kill -9' do?",
        options: [
          { text: "Gracefully terminates process", correct: false },
          { text: "Forcefully kills process", correct: true },
          { text: "Pauses process", correct: false },
          { text: "Restarts process", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows process tree structure?",
        options: [
          { text: "tree", correct: false },
          { text: "pstree", correct: true },
          { text: "proctree", correct: false },
          { text: "ps tree", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you run a command in the background?",
        options: [
          { text: "Add & at the end", correct: true },
          { text: "Add bg before command", correct: false },
          { text: "Use background command", correct: false },
          { text: "Add -b flag", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command brings a background job to foreground?",
        options: [
          { text: "bg", correct: false },
          { text: "fg", correct: true },
          { text: "front", correct: false },
          { text: "foreground", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'nohup' do?",
        options: [
          { text: "Prevents process from receiving SIGHUP", correct: true },
          { text: "Makes process run faster", correct: false },
          { text: "Hides process output", correct: false },
          { text: "Increases process priority", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you suspend a process?",
        options: [
          { text: "Ctrl + Z", correct: true },
          { text: "Ctrl + C", correct: false },
          { text: "Ctrl + D", correct: false },
          { text: "Ctrl + X", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you resume a suspended process in the foreground?",
        options: [
          { text: "fg", correct: true },
          { text: "bg", correct: false },
          { text: "resume", correct: false },
          { text: "continue", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you resume a suspended process in the background?",
        options: [
          { text: "bg", correct: true },
          { text: "fg", correct: false },
          { text: "resume", correct: false },
          { text: "continue", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you kill a process by name?",
        options: [
          { text: "pkill processname", correct: true },
          { text: "kill processname", correct: false },
          { text: "killall processname", correct: false },
          { text: "terminate processname", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "log-management": [
      {
        question: "Where are system logs typically stored?",
        options: [
          { text: "/var/logs", correct: false },
          { text: "/var/log", correct: true },
          { text: "/etc/logs", correct: false },
          { text: "/usr/log", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which service manages logs on modern Linux systems?",
        options: [
          { text: "syslog", correct: false },
          { text: "systemd-journald", correct: true },
          { text: "logd", correct: false },
          { text: "rsyslog", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command shows systemd journal logs?",
        options: [
          { text: "journalctl", correct: true },
          { text: "logctl", correct: false },
          { text: "systemctl log", correct: false },
          { text: "journal", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'tail -f' do?",
        options: [
          { text: "Shows file tail", correct: false },
          { text: "Follows file changes in real-time", correct: true },
          { text: "Shows file header", correct: false },
          { text: "Counts file lines", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which log file contains authentication attempts?",
        options: [
          { text: "/var/log/messages", correct: false },
          { text: "/var/log/auth.log", correct: true },
          { text: "/var/log/system.log", correct: false },
          { text: "/var/log/security.log", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is logrotate used for?",
        options: [
          { text: "Rotating display logs", correct: false },
          { text: "Managing log file sizes and archiving", correct: true },
          { text: "Changing log formats", correct: false },
          { text: "Encrypting log files", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you show the last 100 lines of a log file?",
        options: [
          { text: "tail -n 100 filename", correct: true },
          { text: "head -n 100 filename", correct: false },
          { text: "cat -n 100 filename", correct: false },
          { text: "more -n 100 filename", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you show the first 100 lines of a log file?",
        options: [
          { text: "head -n 100 filename", correct: true },
          { text: "tail -n 100 filename", correct: false },
          { text: "cat -n 100 filename", correct: false },
          { text: "more -n 100 filename", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you search for a specific string in a log file?",
        options: [
          { text: "grep 'string' filename", correct: true },
          { text: "find 'string' filename", correct: false },
          { text: "search 'string' filename", correct: false },
          { text: "locate 'string' filename", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you follow a log file in real-time?",
        options: [
          { text: "tail -f filename", correct: true },
          { text: "head -f filename", correct: false },
          { text: "cat -f filename", correct: false },
          { text: "more -f filename", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "package-management": [
      {
        question: "Which command installs packages on Debian/Ubuntu?",
        options: [
          { text: "yum install", correct: false },
          { text: "apt install", correct: true },
          { text: "pacman -S", correct: false },
          { text: "zypper install", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you update package lists on Ubuntu?",
        options: [
          { text: "apt upgrade", correct: false },
          { text: "apt update", correct: true },
          { text: "apt refresh", correct: false },
          { text: "apt sync", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command removes a package and its configuration files?",
        options: [
          { text: "apt remove", correct: false },
          { text: "apt purge", correct: true },
          { text: "apt delete", correct: false },
          { text: "apt uninstall", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'apt autoremove' do?",
        options: [
          { text: "Removes all packages", correct: false },
          { text: "Removes unused dependencies", correct: true },
          { text: "Removes old packages", correct: false },
          { text: "Removes corrupted packages", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which file contains APT repository information?",
        options: [
          { text: "/etc/apt/sources.list", correct: true },
          { text: "/etc/repositories", correct: false },
          { text: "/var/apt/sources", correct: false },
          { text: "/usr/apt/repos", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is a PPA in Ubuntu context?",
        options: [
          { text: "Package Protection Authority", correct: false },
          { text: "Personal Package Archive", correct: true },
          { text: "Primary Package Access", correct: false },
          { text: "Public Package Authority", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you add a PPA to your system?",
        options: [
          { text: "add-apt-repository ppa:user/ppa", correct: true },
          { text: "apt-add-repository ppa:user/ppa", correct: false },
          { text: "apt-get add-repository ppa:user/ppa", correct: false },
          { text: "apt-get add-ppa ppa:user/ppa", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you remove a PPA from your system?",
        options: [
          { text: "add-apt-repository --remove ppa:user/ppa", correct: true },
          { text: "apt-add-repository --remove ppa:user/ppa", correct: false },
          { text: "apt-get remove-repository ppa:user/ppa", correct: false },
          { text: "apt-get remove-ppa ppa:user/ppa", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you upgrade all packages on your system?",
        options: [
          { text: "apt upgrade", correct: true },
          { text: "apt update", correct: false },
          { text: "apt refresh", correct: false },
          { text: "apt sync", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you search for a package on your system?",
        options: [
          { text: "apt search packagename", correct: true },
          { text: "apt find packagename", correct: false },
          { text: "apt locate packagename", correct: false },
          { text: "apt show packagename", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "backup-recovery": [
      {
        question: "Which command creates compressed archives?",
        options: [
          { text: "compress", correct: false },
          { text: "tar", correct: true },
          { text: "archive", correct: false },
          { text: "backup", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does 'tar -czf' do?",
        options: [
          { text: "Creates a compressed gzip archive", correct: true },
          { text: "Extracts a compressed archive", correct: false },
          { text: "Lists archive contents", correct: false },
          { text: "Tests archive integrity", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which tool synchronizes files and directories?",
        options: [
          { text: "sync", correct: false },
          { text: "rsync", correct: true },
          { text: "copy", correct: false },
          { text: "mirror", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What is the 3-2-1 backup rule?",
        options: [
          { text: "3 copies, 2 different media, 1 offsite", correct: true },
          { text: "3 days, 2 weeks, 1 month retention", correct: false },
          { text: "3 servers, 2 locations, 1 admin", correct: false },
          { text: "3 backups, 2 types, 1 compressed", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "Which command creates a disk image?",
        options: [
          { text: "image", correct: false },
          { text: "dd", correct: true },
          { text: "diskimage", correct: false },
          { text: "clone", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does 'rsync -av' do?",
        options: [
          { text: "Archive mode with verbose output", correct: true },
          { text: "Asynchronous verification", correct: false },
          { text: "Automated versioning", correct: false },
          { text: "Archive validation", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you create a compressed tar archive?",
        options: [
          { text: "tar -czf archive.tar.gz directory", correct: true },
          { text: "tar -xzf archive.tar.gz directory", correct: false },
          { text: "tar -tzf archive.tar.gz directory", correct: false },
          { text: "tar -cf archive.tar.gz directory", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you extract a compressed tar archive?",
        options: [
          { text: "tar -xzf archive.tar.gz", correct: true },
          { text: "tar -czf archive.tar.gz", correct: false },
          { text: "tar -tzf archive.tar.gz", correct: false },
          { text: "tar -cf archive.tar.gz", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you list the contents of a tar archive?",
        options: [
          { text: "tar -tzf archive.tar.gz", correct: true },
          { text: "tar -xzf archive.tar.gz", correct: false },
          { text: "tar -czf archive.tar.gz", correct: false },
          { text: "tar -cf archive.tar.gz", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you create a disk image of a partition?",
        options: [
          { text: "dd if=/dev/sda1 of=image.img", correct: true },
          { text: "dd of=/dev/sda1 if=image.img", correct: false },
          { text: "dd if=/dev/sda1 bs=4M", correct: false },
          { text: "dd of=/dev/sda1 bs=4M", correct: false }
        ],
        difficulty: "hard"
      }
    ]
  },
  "scheduling-jobs": {
    "cron-jobs": [
      {
        question: "Which command edits cron jobs for current user?",
        options: [
          { text: "cron -e", correct: false },
          { text: "crontab -e", correct: true },
          { text: "editcron", correct: false },
          { text: "cronedit", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does '0 2 * * *' mean in cron?",
        options: [
          { text: "Every 2 hours", correct: false },
          { text: "Daily at 2:00 AM", correct: true },
          { text: "Every 2 minutes", correct: false },
          { text: "2nd day of every month", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which file contains system-wide cron jobs?",
        options: [
          { text: "/etc/cron", correct: false },
          { text: "/etc/crontab", correct: true },
          { text: "/var/cron", correct: false },
          { text: "/usr/cron", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What does '*/15 * * * *' represent?",
        options: [
          { text: "Every 15 hours", correct: false },
          { text: "Every 15 minutes", correct: true },
          { text: "15th minute of every hour", correct: false },
          { text: "Every 15 days", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command lists current user's cron jobs?",
        options: [
          { text: "crontab -l", correct: true },
          { text: "cron -l", correct: false },
          { text: "listcron", correct: false },
          { text: "showcron", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What does '@reboot' do in crontab?",
        options: [
          { text: "Reboots the system", correct: false },
          { text: "Runs command at system startup", correct: true },
          { text: "Schedules system reboot", correct: false },
          { text: "Checks reboot status", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you schedule a job to run every Monday at 3 AM?",
        options: [
          { text: "0 3 * * 1", correct: true },
          { text: "3 0 * * 1", correct: false },
          { text: "0 3 1 * *", correct: false },
          { text: "3 0 1 * *", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you schedule a job to run every 15 minutes?",
        options: [
          { text: "*/15 * * * *", correct: true },
          { text: "15 * * * *", correct: false },
          { text: "* */15 * * *", correct: false },
          { text: "* * */15 * *", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you schedule a job to run every hour?",
        options: [
          { text: "0 * * * *", correct: true },
          { text: "* * * * *", correct: false },
          { text: "* * */1 * *", correct: false },
          { text: "* * * */1 *", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you schedule a job to run every day at 5 PM?",
        options: [
          { text: "0 17 * * *", correct: true },
          { text: "17 0 * * *", correct: false },
          { text: "0 5 * * *", correct: false },
          { text: "5 0 * * *", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "at-command": [
      {
        question: "What is the 'at' command used for?",
        options: [
          { text: "Recurring job scheduling", correct: false },
          { text: "One-time job scheduling", correct: true },
          { text: "System monitoring", correct: false },
          { text: "Process management", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which command lists pending 'at' jobs?",
        options: [
          { text: "at -l", correct: false },
          { text: "atq", correct: true },
          { text: "at list", correct: false },
          { text: "at show", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you schedule a job to run at 3 PM today?",
        options: [
          { text: "at 15:00", correct: true },
          { text: "at 3pm", correct: false },
          { text: "at 15h", correct: false },
          { text: "at 3:00", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command removes an 'at' job?",
        options: [
          { text: "at -d", correct: false },
          { text: "atrm", correct: true },
          { text: "at remove", correct: false },
          { text: "atdel", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What happens when you type 'at now + 1 hour'?",
        options: [
          { text: "Runs command immediately", correct: false },
          { text: "Schedules job to run in 1 hour", correct: true },
          { text: "Sets system time forward", correct: false },
          { text: "Creates hourly recurring job", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which service must be running for 'at' to work?",
        options: [
          { text: "cron", correct: false },
          { text: "atd", correct: true },
          { text: "scheduler", correct: false },
          { text: "timer", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you schedule a job to run tomorrow at 2 AM?",
        options: [
          { text: "at 02:00 tomorrow", correct: true },
          { text: "at 2am tomorrow", correct: false },
          { text: "at 2h tomorrow", correct: false },
          { text: "at 2:00 tomorrow", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you schedule a job to run in 2 hours?",
        options: [
          { text: "at now + 2 hours", correct: true },
          { text: "at 2 hours", correct: false },
          { text: "at +2 hours", correct: false },
          { text: "at 2h", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you schedule a job to run at a specific date and time?",
        options: [
          { text: "at YYYY-MM-DD HH:MM", correct: true },
          { text: "at HH:MM YYYY-MM-DD", correct: false },
          { text: "at YYYY/MM/DD HH:MM", correct: false },
          { text: "at HH:MM YYYY/MM/DD", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you schedule a job to run at midnight?",
        options: [
          { text: "at midnight", correct: true },
          { text: "at 00:00", correct: false },
          { text: "at 12:00 AM", correct: false },
          { text: "at 0:00", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "systemd-timers": [
      {
        question: "What are systemd timers?",
        options: [
          { text: "System clocks", correct: false },
          { text: "Modern replacement for cron jobs", correct: true },
          { text: "Performance timers", correct: false },
          { text: "Network timeouts", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which command lists active systemd timers?",
        options: [
          { text: "systemctl list-timers", correct: true },
          { text: "timerctl list", correct: false },
          { text: "systemd-timer list", correct: false },
          { text: "timer list", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What file extension do systemd timer units have?",
        options: [
          { text: ".service", correct: false },
          { text: ".timer", correct: true },
          { text: ".schedule", correct: false },
          { text: ".time", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Which directive schedules a timer to run daily?",
        options: [
          { text: "OnCalendar=daily", correct: true },
          { text: "Schedule=daily", correct: false },
          { text: "Frequency=daily", correct: false },
          { text: "RunDaily=true", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you enable a systemd timer?",
        options: [
          { text: "systemctl enable timer.timer", correct: true },
          { text: "systemctl start timer", correct: false },
          { text: "timer enable", correct: false },
          { text: "systemd-timer enable", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What advantage do systemd timers have over cron?",
        options: [
          { text: "Simpler syntax", correct: false },
          { text: "Better logging and dependency management", correct: true },
          { text: "Faster execution", correct: false },
          { text: "Less resource usage", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you create a systemd timer?",
        options: [
          { text: "Create a .timer file and a corresponding .service file", correct: true },
          { text: "Create a .cron file", correct: false },
          { text: "Create a .schedule file", correct: false },
          { text: "Create a .time file", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you disable a systemd timer?",
        options: [
          { text: "systemctl disable timer.timer", correct: true },
          { text: "systemctl stop timer", correct: false },
          { text: "timer disable", correct: false },
          { text: "systemd-timer disable", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you start a systemd timer?",
        options: [
          { text: "systemctl start timer.timer", correct: true },
          { text: "systemctl enable timer", correct: false },
          { text: "timer start", correct: false },
          { text: "systemd-timer start", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you stop a systemd timer?",
        options: [
          { text: "systemctl stop timer.timer", correct: true },
          { text: "systemctl disable timer", correct: false },
          { text: "timer stop", correct: false },
          { text: "systemd-timer stop", correct: false }
        ],
        difficulty: "medium"
      }
    ],
    "job-scheduling-best-practices": [
      {
        question: "What should you always include in scheduled scripts?",
        options: [
          { text: "GUI components", correct: false },
          { text: "Error handling and logging", correct: true },
          { text: "User interaction", correct: false },
          { text: "Network dependencies", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Why should you use absolute paths in cron jobs?",
        options: [
          { text: "Faster execution", correct: false },
          { text: "Cron has minimal environment", correct: true },
          { text: "Security reasons", correct: false },
          { text: "Better logging", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What's a good practice for cron job output?",
        options: [
          { text: "Always display on screen", correct: false },
          { text: "Redirect to log files or /dev/null", correct: true },
          { text: "Send to all users", correct: false },
          { text: "Store in memory", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How should you test scheduled jobs?",
        options: [
          { text: "Only in production", correct: false },
          { text: "Run manually first, then schedule", correct: true },
          { text: "Wait for scheduled time", correct: false },
          { text: "Test only syntax", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What's important when scheduling resource-intensive jobs?",
        options: [
          { text: "Run during peak hours", correct: false },
          { text: "Consider system load and timing", correct: true },
          { text: "Run multiple simultaneously", correct: false },
          { text: "Ignore other processes", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "Why should you avoid overlapping job executions?",
        options: [
          { text: "Saves disk space", correct: false },
          { text: "Prevents resource conflicts and data corruption", correct: true },
          { text: "Improves job speed", correct: false },
          { text: "Reduces log files", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you ensure a job runs only once?",
        options: [
          { text: "Use a lock file", correct: true },
          { text: "Use a unique job name", correct: false },
          { text: "Use a unique job ID", correct: false },
          { text: "Use a unique job time", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you ensure a job runs at the correct time?",
        options: [
          { text: "Use NTP to synchronize time", correct: true },
          { text: "Use a unique job name", correct: false },
          { text: "Use a unique job ID", correct: false },
          { text: "Use a unique job time", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you ensure a job runs correctly?",
        options: [
          { text: "Test the job manually", correct: true },
          { text: "Use a unique job name", correct: false },
          { text: "Use a unique job ID", correct: false },
          { text: "Use a unique job time", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you ensure a job runs safely?",
        options: [
          { text: "Use absolute paths", correct: true },
          { text: "Use a unique job name", correct: false },
          { text: "Use a unique job ID", correct: false },
          { text: "Use a unique job time", correct: false }
        ],
        difficulty: "medium"
      }
    ]
  },
  "pseudocode-standard": {
    "pseudocode-basics": [
      {
        question: "What is the primary purpose of pseudocode?",
        options: [
          { text: "To replace actual programming", correct: false },
          { text: "To plan and design algorithms", correct: true },
          { text: "To document finished programs", correct: false },
          { text: "To test program performance", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "Which statement correctly represents pseudocode for assignment?",
        options: [
          { text: "x = 5", correct: false },
          { text: "SET x TO 5", correct: true },
          { text: "x := 5", correct: false },
          { text: "LET x = 5", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How should pseudocode statements be structured?",
        options: [
          { text: "Using specific programming language syntax", correct: false },
          { text: "Using natural language with clear structure", correct: true },
          { text: "Using only mathematical symbols", correct: false },
          { text: "Using abbreviated commands", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What is the correct way to show input in pseudocode?",
        options: [
          { text: "scanf()", correct: false },
          { text: "READ name", correct: true },
          { text: "input()", correct: false },
          { text: "get name", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent output in pseudocode?",
        options: [
          { text: "printf()", correct: false },
          { text: "WRITE message", correct: true },
          { text: "print()", correct: false },
          { text: "echo", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What makes pseudocode different from actual code?",
        options: [
          { text: "It uses specific syntax", correct: false },
          { text: "It's language-independent and focuses on logic", correct: true },
          { text: "It's faster to execute", correct: false },
          { text: "It requires a compiler", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent comments in pseudocode?",
        options: [
          { text: "// comment", correct: false },
          { text: "/* comment */", correct: false },
          { text: "# comment", correct: false },
          { text: "COMMENT: comment", correct: true }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent a loop in pseudocode?",
        options: [
          { text: "for i = 1 to 10", correct: false },
          { text: "LOOP i FROM 1 TO 10", correct: true },
          { text: "REPEAT i = 1 TO 10", correct: false },
          { text: "WHILE i < 10", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent an if-else statement in pseudocode?",
        options: [
          { text: "if (condition) { } else { }", correct: false },
          { text: "IF condition THEN ... ELSE ... ENDIF", correct: true },
          { text: "CHECK condition THEN ... OTHERWISE ...", correct: false },
          { text: "WHEN condition THEN ... OTHERWISE ...", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent a function call in pseudocode?",
        options: [
          { text: "function()", correct: false },
          { text: "CALL functionName(parameters)", correct: true },
          { text: "EXECUTE functionName", correct: false },
          { text: "RUN functionName", correct: false }
        ],
        difficulty: "easy"
      }
    ],
    "control-structures": [
      {
        question: "How do you represent an IF statement in pseudocode?",
        options: [
          { text: "if (condition) { }", correct: false },
          { text: "IF condition THEN ... ENDIF", correct: true },
          { text: "when condition do", correct: false },
          { text: "check condition", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What's the correct pseudocode for a WHILE loop?",
        options: [
          { text: "while (condition) { }", correct: false },
          { text: "WHILE condition DO ... ENDWHILE", correct: true },
          { text: "REPEAT WHILE condition", correct: false },
          { text: "LOOP WHILE condition", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent a FOR loop in pseudocode?",
        options: [
          { text: "for i = 1 to 10 { }", correct: false },
          { text: "FOR i FROM 1 TO 10 DO ... ENDFOR", correct: true },
          { text: "REPEAT i = 1 TO 10", correct: false },
          { text: "LOOP i 1 TO 10", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What's the pseudocode structure for IF-ELSE?",
        options: [
          { text: "IF condition THEN ... ELSE ... ENDIF", correct: true },
          { text: "IF condition THEN ... OTHERWISE ...", correct: false },
          { text: "IF condition DO ... ELSE DO ...", correct: false },
          { text: "CHECK condition THEN ... ELSE ...", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you represent a CASE/SWITCH statement?",
        options: [
          { text: "switch (variable) { }", correct: false },
          { text: "CASE variable OF ... ENDCASE", correct: true },
          { text: "SELECT variable FROM ...", correct: false },
          { text: "CHOOSE variable WHEN ...", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "What's the purpose of indentation in pseudocode?",
        options: [
          { text: "Makes it look professional", correct: false },
          { text: "Shows structure and nested levels", correct: true },
          { text: "Required for execution", correct: false },
          { text: "Saves space", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent a DO-WHILE loop in pseudocode?",
        options: [
          { text: "do { } while (condition)", correct: false },
          { text: "DO ... WHILE condition ENDDO", correct: true },
          { text: "REPEAT ... UNTIL condition", correct: false },
          { text: "LOOP ... WHILE condition", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent a REPEAT-UNTIL loop in pseudocode?",
        options: [
          { text: "repeat { } until (condition)", correct: false },
          { text: "REPEAT ... UNTIL condition ENDREPEAT", correct: true },
          { text: "DO ... WHILE condition", correct: false },
          { text: "LOOP ... UNTIL condition", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent a nested IF statement in pseudocode?",
        options: [
          { text: "if (condition1) { if (condition2) { } }", correct: false },
          { text: "IF condition1 THEN ... IF condition2 THEN ... ENDIF ... ENDIF", correct: true },
          { text: "CHECK condition1 THEN ... CHECK condition2 THEN ...", correct: false },
          { text: "WHEN condition1 THEN ... WHEN condition2 THEN ...", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent a nested loop in pseudocode?",
        options: [
          { text: "for i = 1 to 10 { for j = 1 to 10 { } }", correct: false },
          { text: "FOR i FROM 1 TO 10 DO ... FOR j FROM 1 TO 10 DO ... ENDFOR ... ENDFOR", correct: true },
          { text: "REPEAT i = 1 TO 10 ... REPEAT j = 1 TO 10 ...", correct: false },
          { text: "LOOP i 1 TO 10 ... LOOP j 1 TO 10 ...", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "functions-procedures": [
      {
        question: "How do you define a function in pseudocode?",
        options: [
          { text: "def function()", correct: false },
          { text: "FUNCTION name(parameters) ... ENDFUNCTION", correct: true },
          { text: "function name() { }", correct: false },
          { text: "CREATE FUNCTION name", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What's the difference between FUNCTION and PROCEDURE?",
        options: [
          { text: "No difference", correct: false },
          { text: "FUNCTION returns a value, PROCEDURE doesn't", correct: true },
          { text: "PROCEDURE is faster", correct: false },
          { text: "FUNCTION is more complex", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent a function call in pseudocode?",
        options: [
          { text: "function()", correct: false },
          { text: "CALL functionName(parameters)", correct: true },
          { text: "EXECUTE functionName", correct: false },
          { text: "RUN functionName", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you return a value from a function?",
        options: [
          { text: "return value", correct: false },
          { text: "RETURN value", correct: true },
          { text: "GIVE BACK value", correct: false },
          { text: "OUTPUT value", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What's the correct way to define parameters?",
        options: [
          { text: "FUNCTION name(param1, param2)", correct: false },
          { text: "FUNCTION name(param1: type, param2: type)", correct: true },
          { text: "FUNCTION name[param1, param2]", correct: false },
          { text: "FUNCTION name WITH param1, param2", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent local variables in a function?",
        options: [
          { text: "var localVar", correct: false },
          { text: "DECLARE localVar", correct: true },
          { text: "LOCAL localVar", correct: false },
          { text: "SET localVar", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you define a procedure in pseudocode?",
        options: [
          { text: "def procedure()", correct: false },
          { text: "PROCEDURE name(parameters) ... ENDPROCEDURE", correct: true },
          { text: "procedure name() { }", correct: false },
          { text: "CREATE PROCEDURE name", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you call a procedure in pseudocode?",
        options: [
          { text: "procedure()", correct: false },
          { text: "CALL procedureName(parameters)", correct: true },
          { text: "EXECUTE procedureName", correct: false },
          { text: "RUN procedureName", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "How do you represent a recursive function in pseudocode?",
        options: [
          { text: "function name() { name() }", correct: false },
          { text: "FUNCTION name(parameters) ... CALL name(parameters) ... ENDFUNCTION", correct: true },
          { text: "RECURSIVE FUNCTION name(parameters) ... ENDFUNCTION", correct: false },
          { text: "CREATE RECURSIVE FUNCTION name(parameters)", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent a recursive procedure in pseudocode?",
        options: [
          { text: "procedure name() { name() }", correct: false },
          { text: "PROCEDURE name(parameters) ... CALL name(parameters) ... ENDPROCEDURE", correct: true },
          { text: "RECURSIVE PROCEDURE name(parameters) ... ENDPROCEDURE", correct: false },
          { text: "CREATE RECURSIVE PROCEDURE name(parameters)", correct: false }
        ],
        difficulty: "hard"
      }
    ],
    "data-structures": [
      {
        question: "How do you declare an array in pseudocode?",
        options: [
          { text: "array[10]", correct: false },
          { text: "DECLARE arrayName[size]", correct: true },
          { text: "CREATE ARRAY arrayName", correct: false },
          { text: "SET arrayName AS ARRAY", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you access an array element?",
        options: [
          { text: "array.get(index)", correct: false },
          { text: "arrayName[index]", correct: true },
          { text: "GET arrayName AT index", correct: false },
          { text: "arrayName.index", correct: false }
        ],
        difficulty: "easy"
      },
      {
        question: "What's the pseudocode for a record/structure?",
        options: [
          { text: "struct name { }", correct: false },
          { text: "RECORD name ... ENDRECORD", correct: true },
          { text: "STRUCTURE name ... END", correct: false },
          { text: "OBJECT name ... ENDOBJECT", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent accessing a record field?",
        options: [
          { text: "record->field", correct: false },
          { text: "recordName.fieldName", correct: true },
          { text: "recordName[fieldName]", correct: false },
          { text: "GET field FROM record", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "What's the correct way to initialize an array?",
        options: [
          { text: "arrayName = [1,2,3]", correct: false },
          { text: "SET arrayName TO [1,2,3]", correct: true },
          { text: "arrayName := [1,2,3]", correct: false },
          { text: "FILL arrayName WITH [1,2,3]", correct: false }
        ],
        difficulty: "medium"
      },
      {
        question: "How do you represent finding array length?",
        options: [
          { text: "array.length", correct: false },
          { text: "LENGTH(arrayName)", correct: true },
          { text: "SIZE(arrayName)", correct: false },
          { text: "COUNT(arrayName)", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you declare a linked list in pseudocode?",
        options: [
          { text: "list[10]", correct: false },
          { text: "DECLARE listName AS LINKEDLIST", correct: true },
          { text: "CREATE LINKEDLIST listName", correct: false },
          { text: "SET listName AS LINKEDLIST", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you access a linked list element?",
        options: [
          { text: "list.get(index)", correct: false },
          { text: "listName[index]", correct: true },
          { text: "GET listName AT index", correct: false },
          { text: "listName.index", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent a stack in pseudocode?",
        options: [
          { text: "stack[10]", correct: false },
          { text: "DECLARE stackName AS STACK", correct: true },
          { text: "CREATE STACK stackName", correct: false },
          { text: "SET stackName AS STACK", correct: false }
        ],
        difficulty: "hard"
      },
      {
        question: "How do you represent a queue in pseudocode?",
        options: [
          { text: "queue[10]", correct: false },
          { text: "DECLARE queueName AS QUEUE", correct: true },
          { text: "CREATE QUEUE queueName", correct: false },
          { text: "SET queueName AS QUEUE", correct: false }
        ],
        difficulty: "hard"
      }
    ]
  }
};

// Make the database available globally
window.quizDatabase = quizDatabase;
