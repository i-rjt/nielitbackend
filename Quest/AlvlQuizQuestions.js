export function SetA(){
return [
  {
    "question": "Which of the following is a key difference between UNIX and Windows based operating systems?",
    "options": [
      "UNIX is proprietary, while Windows is open-source.",
      "UNIX is primarily command-line driven, while Windows is GUI-based.",
      "Windows offers better security features than UNIX.",
      "UNIX systems are generally less stable than Windows systems."
    ],
    "correct_answer": "UNIX is primarily command-line driven, while Windows is GUI-based.",
    "explanation": "UNIX-based operating systems are historically known for their powerful command-line interface, while Windows operating systems are well-known for their graphical user interface. While both have evolved, this remains a fundamental distinction. The provided text asks to 'Differentiate between UNIX and Windows based operating systems.' [cite: 1]"
  },
  {
    "question": "What is the primary purpose of a priority interrupt technique?",
    "options": [
      "To evenly distribute interrupt requests among all connected devices.",
      "To ensure that all interrupts are processed in the order they arrive.",
      "To handle multiple interrupt requests by giving preference to higher-priority interrupts.",
      "To defer all interrupts until the current process is completed."
    ],
    "correct_answer": "To handle multiple interrupt requests by giving preference to higher-priority interrupts.",
    "explanation": "A priority interrupt technique is used when multiple devices attempt to interrupt the CPU simultaneously. It establishes a hierarchy to determine which interrupt request is serviced first. The provided text asks 'What is a priority interrupt technique?' [cite: 1]"
  },
  {
    "question": "Which method is explained with a block diagram for its working in the context of input/output operations?",
    "options": [
      "Handshaking method of Asynchronous data transfer",
      "Daisy chaining method",
      "Priority interrupt technique",
      "Memory mapped I/O"
    ],
    "correct_answer": "Daisy chaining method",
    "explanation": "The text specifically states, 'Explain Daisy chaining method and its working with the help of suitable block diagram.' "
  },
  {
    "question": "Which of the following is NOT explicitly mentioned as a role of an operating system in the provided text?",
    "options": [
      "Managing memory",
      "Handling input/output operations",
      "Managing processes",
      "Performing arithmetic calculations"
    ],
    "correct_answer": "Performing arithmetic calculations",
    "explanation": "While an operating system facilitates programs that perform arithmetic calculations, 'Performing arithmetic calculations' itself is not a direct role of the operating system. The text asks to 'Explain different roles of operating system in brief.' [cite: 3]"
  },
  {
    "question": "What is the primary characteristic of a Distributed Operating System?",
    "options": [
      "It operates on a single, powerful CPU.",
      "It manages resources across multiple, interconnected computers.",
      "It is designed for real-time applications only.",
      "It supports only a single user at a time."
    ],
    "correct_answer": "It manages resources across multiple, interconnected computers.",
    "explanation": "A Distributed Operating System is designed to manage and coordinate resources across a collection of independent computers that appear to users as a single, coherent system. The text specifically asks 'What is the Distributed Operating System? Explain the advantages of distributed operating system.' [cite: 4]"
  },
  {
    "question": "What is the function of cache memory?",
    "options": [
      "To store permanent data for the operating system.",
      "To provide slow, large-capacity storage for archived files.",
      "To store frequently accessed data for faster retrieval by the CPU.",
      "To act as a primary storage for all running applications."
    ],
    "correct_answer": "To store frequently accessed data for faster retrieval by the CPU.",
    "explanation": "Cache memory is a small, high-speed memory that stores copies of data from frequently used main memory locations, allowing for faster access by the CPU. The question 'What is cache memory?' is directly from the source. [cite: 4]"
  },
  {
    "question": "Which memory mapping technique is asked to be explained with a suitable example?",
    "options": [
      "Direct mapping",
      "Set-associative mapping",
      "Associative mapping",
      "Page mapping"
    ],
    "correct_answer": "Associative mapping",
    "explanation": "The text explicitly states: 'Explain associate mapping technique with a suitable example.' [cite: 5]"
  },
  {
    "question": "What is the fundamental difference between a process and a thread?",
    "options": [
      "A process is a lightweight unit of execution, while a thread is a heavyweight unit.",
      "Processes share the same memory space, while threads have separate memory spaces.",
      "A process is an independent program, while a thread is a part of a process.",
      "Threads can run on different CPUs simultaneously, while processes cannot."
    ],
    "correct_answer": "A process is an independent program, while a thread is a part of a process.",
    "explanation": "A process is an independent execution unit with its own memory space, while a thread is a smaller unit of execution within a process that shares the process's memory space. The text asks 'What is the difference between process and a thread?' [cite: 6]"
  },
  {
    "question": "Which of the following is NOT listed as a system call to be explained?",
    "options": [
      "fork",
      "ioctl",
      "chmod",
      "exit"
    ],
    "correct_answer": "exit",
    "explanation": "The provided text lists 'fork', 'ioctl', 'chmod', and 'sleep' as system calls to be explained. 'exit' is not listed. [cite: 8]"
  },
  {
    "question": "Which command is used to display the beginning of a file in the context of the vi text editor?",
    "options": [
      "cat",
      "more",
      "head",
      "tail"
    ],
    "correct_answer": "head",
    "explanation": "The 'head' command is used to display the first few lines (the 'head') of a file. This command is listed under the functionality of commands in the context of the vi text editor. [cite: 8]"
  },
  {
    "question": "Which of the following terms is NOT listed for a brief explanation?",
    "options": [
      "Virtual Memory",
      "Instruction Formats",
      "Process Control Block",
      "Context Switching"
    ],
    "correct_answer": "Context Switching",
    "explanation": "The terms listed for brief explanation are 'Virtual Memory', 'Instruction Formats', 'Process Control Block', and 'Symbolic Links'. 'Context Switching' is not listed in this specific section. [cite: 8]"
  },
  {
    "question": "What does DMA stand for?",
    "options": [
      "Direct Memory Allocation",
      "Dynamic Memory Access",
      "Direct Memory Access",
      "Digital Management Architecture"
    ],
    "correct_answer": "Direct Memory Access",
    "explanation": "DMA refers to Direct Memory Access, a feature that allows certain hardware subsystems to access main system memory (RAM) independently of the central processing unit (CPU). The text asks to 'Explain DMA in detail with the help of diagram.' [cite: 9]"
  },
  {
    "question": "What type of gates are specified for constructing a 2-to-4 line decoder?",
    "options": [
      "AND gates",
      "OR gates",
      "NOR gates",
      "NAND gates"
    ],
    "correct_answer": "NOR gates",
    "explanation": "The instruction explicitly states: 'Draw the logic diagram of a 2-to-4 line decoder using only NOR gates and prepare the truth table for the same.' [cite: 10]"
  },
  {
    "question": "Which multiplication algorithm is specified for multiplying (+15) with (-13)?",
    "options": [
      "Array multiplier algorithm",
      "Booth's algorithm",
      "Shift-and-add algorithm",
      "Wallace tree algorithm"
    ],
    "correct_answer": "Booth's algorithm",
    "explanation": "The question specifically asks to 'Multiply the (+15) with (-13) using Booth's algorithm. Give each step.' [cite: 13]"
  },
  {
    "question": "What is the primary difference between an SR flip-flop and a JK flip-flop?",
    "options": [
      "SR flip-flop has a clock input, while JK flip-flop does not.",
      "JK flip-flop avoids the indeterminate state (S=R=1) present in SR flip-flop.",
      "SR flip-flop has more inputs than JK flip-flop.",
      "JK flip-flop is only used for asynchronous circuits."
    ],
    "correct_answer": "JK flip-flop avoids the indeterminate state (S=R=1) present in SR flip-flop.",
    "explanation": "The JK flip-flop is an improvement over the SR flip-flop as it handles the indeterminate state (when both S and R inputs are 1) by toggling its output. The text asks to 'Write a basic difference between a S-R flip flop and JK flip flop.' [cite: 13]"
  },
  {
    "question": "What are the key components and transitions explained in a process state diagram?",
    "options": [
      "CPU, RAM, HDD, and network connections.",
      "New, Ready, Running, Waiting, and Terminated states.",
      "Input, Process, Output, and Storage stages.",
      "User mode and kernel mode operations."
    ],
    "correct_answer": "New, Ready, Running, Waiting, and Terminated states.",
    "explanation": "A process state diagram typically illustrates the different states a process can be in during its lifecycle: New, Ready, Running, Waiting, and Terminated, along with the transitions between these states. The text asks 'Draw Process state diagram and explain each state and transitions.' [cite: 16]"
  },
  {
    "question": "What is an Open Source Software?",
    "options": [
      "Software that is freely available for use but its source code is hidden.",
      "Software that requires a license fee but allows modifications.",
      "Software with source code that is publicly available and can be freely used, modified, and distributed.",
      "Software developed by a single company for commercial purposes."
    ],
    "correct_answer": "Software with source code that is publicly available and can be freely used, modified, and distributed.",
    "explanation": "Open Source Software (OSS) is characterized by its publicly accessible source code, allowing users to inspect, modify, and enhance it. The text asks 'What is an Open Source Software? Give some examples of Open Source Software.' [cite: 17]"
  },
  {
    "question": "What is an inode in the context of a file system?",
    "options": [
      "A directory entry that stores file names.",
      "A block of data that holds the actual content of a file.",
      "A data structure that stores metadata about a file or directory.",
      "A network address for a file server."
    ],
    "correct_answer": "A data structure that stores metadata about a file or directory.",
    "explanation": "An inode (index node) is a data structure in a Unix-style file system that describes a filesystem object such as a file or a directory. It stores metadata about the file, but not its content. The text asks 'What is an inode? Explain different fields in an inode.' [cite: 19]"
  },
  {
    "question": "Which of the following is NOT mentioned as a mode of the vi editor?",
    "options": [
      "Command mode",
      "Insert mode",
      "Visual mode",
      "Exit mode"
    ],
    "correct_answer": "Exit mode",
    "explanation": "Common modes in the vi editor include command mode (normal mode), insert mode, and visual mode. 'Exit mode' is not a standard operational mode of the vi editor. The question is 'What are the different modes of vi editor?' [cite: 21]"
  },
  {
    "question": "What is the primary difference between a hard link and a soft link (symbolic link) in Linux?",
    "options": [
      "Hard links can link across different file systems, while soft links cannot.",
      "Soft links point to the inode of the original file, while hard links point to the file name.",
      "Hard links create a new copy of the file data, while soft links do not.",
      "Soft links can point to directories, while hard links typically cannot (with exceptions)."
    ],
    "correct_answer": "Soft links can point to directories, while hard links typically cannot (with exceptions).",
    "explanation": "A hard link is a direct pointer to the inode of a file, meaning it shares the same data as the original file. A soft link (or symbolic link) is a separate file that contains the path to the original file. Soft links can point to directories, but hard links generally cannot for safety reasons. The text asks 'What are differences between hard link and soft link?' [cite: 23]"
  },
  {
    "question": "Which file in Linux contains user account information?",
    "options": [
      "/etc/shadow",
      "/etc/group",
      "/etc/passwd",
      "/var/log/auth.log"
    ],
    "correct_answer": "/etc/passwd",
    "explanation": "The `/etc/passwd` file stores essential user account information. The text specifically asks to 'Write the format for /etc/passwd file, explain each column.' [cite: 24]"
  },
  {
    "question": "What is the purpose of CRON and CRONTAB in LINUX?",
    "options": [
      "To manage network connections.",
      "To schedule commands or scripts to run automatically at specified times.",
      "To monitor system performance in real-time.",
      "To manage file permissions for directories."
    ],
    "correct_answer": "To schedule commands or scripts to run automatically at specified times.",
    "explanation": "CRON is a time-based job scheduler in Unix-like operating systems, and CRONTAB is the command used to maintain crontab files, which are lists of commands to be executed at specified times. The text asks 'What are the usages CRON and CRONTAB in LINUX?' [cite: 25]"
  },
  {
    "question": "Which command is used to display the contents of a file page by page?",
    "options": [
      "cat",
      "more",
      "head",
      "tail"
    ],
    "correct_answer": "more",
    "explanation": "The 'more' command allows viewing of file content one screen at a time, making it useful for large files. It's explicitly mentioned in the list of commands to explain. [cite: 25]"
  },
  {
    "question": "What are the components of UNIX architecture?",
    "options": [
      "Kernel, Shell, and User Applications",
      "CPU, RAM, and Hard Drive",
      "Input, Output, and Processing Units",
      "BIOS, Operating System, and Drivers"
    ],
    "correct_answer": "Kernel, Shell, and User Applications",
    "explanation": "UNIX architecture is typically described with the Kernel at its core, surrounded by the Shell, which then interacts with user applications. The text asks to 'Explain UNIX architecture with its component.' [cite: 28]"
  },
  {
    "question": "What is the main difference between software interrupt and hardware interrupt?",
    "options": [
      "Software interrupts are caused by external events, while hardware interrupts are by program instructions.",
      "Hardware interrupts are faster than software interrupts.",
      "Software interrupts are initiated by software instructions, while hardware interrupts are initiated by hardware devices.",
      "There is no functional difference between them."
    ],
    "correct_answer": "Software interrupts are initiated by software instructions, while hardware interrupts are initiated by hardware devices.",
    "explanation": "Hardware interrupts are generated by hardware devices (e.g., keyboard, mouse) to signal completion of an I/O operation or an error, while software interrupts are generated by the CPU executing a specific instruction. The text asks to 'Differentiate between software interrupt and hardware interrupt.' [cite: 29]"
  },
  {
    "question": "What is the primary function of an operating system?",
    "options": [
      "To develop new software applications.",
      "To manage computer hardware and software resources.",
      "To provide internet connectivity.",
      "To design graphic user interfaces."
    ],
    "correct_answer": "To manage computer hardware and software resources.",
    "explanation": "The core function of an operating system (OS) is to manage a computer's hardware and software resources, including memory, processes, and I/O devices. The text asks 'What is operating system? Describe the functions of an operating system in detail.' [cite: 31]"
  },
  {
    "question": "Which of the following is NOT a common computer register discussed in basic computer organization?",
    "options": [
      "Program Counter (PC)",
      "Instruction Register (IR)",
      "Memory Address Register (MAR)",
      "Printer Buffer Register (PBR)"
    ],
    "correct_answer": "Printer Buffer Register (PBR)",
    "explanation": "Common registers in basic computer organization include Program Counter (PC), Instruction Register (IR), Memory Address Register (MAR), Data Register (DR), and Accumulator (AC). A 'Printer Buffer Register' is not a standard basic computer register. The text asks to 'Define computer register. Explain various registers used in basic computer organization with its functions.' [cite: 32]"
  },
  {
    "question": "What is the purpose of a Process Control Block (PCB)?",
    "options": [
      "To control the flow of data on the system bus.",
      "To store information about a process, such as its state, program counter, and registers.",
      "To manage memory allocation for new processes.",
      "To facilitate communication between different operating systems."
    ],
    "correct_answer": "To store information about a process, such as its state, program counter, and registers.",
    "explanation": "The Process Control Block (PCB) is a data structure maintained by the operating system for each process. It contains all the information needed to manage a process. The text asks to 'Explain the role of process control block during the process execution in detail.' [cite: 35]"
  },
  {
    "question": "What advantage does 2's complement representation have over 1's complement?",
    "options": [
      "It uses fewer bits for representation.",
      "It has a simpler method for addition.",
      "It has only one representation for zero.",
      "It can represent a larger range of numbers."
    ],
    "correct_answer": "It has only one representation for zero.",
    "explanation": "A significant advantage of 2's complement is that it provides a unique representation for zero, unlike 1's complement which has both positive and negative zero. This simplifies arithmetic operations. The text asks 'What advantage does 2's complement have over 1's complement?' [cite: 36]"
  },
  {
    "question": "Which of the following is a type of RAM memory?",
    "options": [
      "PROM",
      "EEPROM",
      "SRAM",
      "Flash Memory"
    ],
    "correct_answer": "SRAM",
    "explanation": "SRAM (Static Random-Access Memory) is a type of RAM. PROM, EEPROM, and Flash Memory are types of ROM or non-volatile memory. The text asks 'What are different types of RAM and ROM memories? Explain in detail.' [cite: 38]"
  },
  {
    "question": "What are the different I/O modes of data transfer?",
    "options": [
      "Serial and Parallel",
      "Synchronous and Asynchronous",
      "Programmed I/O, Interrupt-driven I/O, and DMA",
      "Read and Write"
    ],
    "correct_answer": "Programmed I/O, Interrupt-driven I/O, and DMA",
    "explanation": "The common I/O modes of data transfer refer to how the CPU or system handles input/output operations, typically categorized as Programmed I/O, Interrupt-driven I/O, and Direct Memory Access (DMA). The text asks 'What are the different I/O modes of data transfer? Discuss different modes of transfers in detail.' [cite: 39]"
  },
  {
    "question": "Which CPU scheduling algorithm is most likely to cause starvation?",
    "options": [
      "First-come-first-served (FCFS)",
      "Round Robin",
      "Priority",
      "Shortest remaining time first"
    ],
    "correct_answer": "Priority",
    "explanation": "Priority scheduling can lead to starvation (indefinite postponement) if high-priority processes continuously arrive, preventing lower-priority processes from ever getting CPU time. The question asks 'Which of the following scheduling algorithms may cause starvation?' [cite: 82]"
  },
  {
    "question": "What is Paging in operating systems?",
    "options": [
      "A technique for optimizing disk access.",
      "A memory management scheme that allows a process's physical address space to be non-contiguous.",
      "A method for displaying output on a screen.",
      "A form of inter-process communication."
    ],
    "correct_answer": "A memory management scheme that allows a process's physical address space to be non-contiguous.",
    "explanation": "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. It allows the physical address space of a process to be non-contiguous. The text asks 'What is meant by Paging? Explain the process of implementation of Paging.' [cite: 84]"
  },
  {
    "question": "What is the purpose of the 'find' command in Linux?",
    "options": [
      "To install new software packages.",
      "To list the contents of a directory.",
      "To search for files and directories based on various criteria.",
      "To compress and decompress files."
    ],
    "correct_answer": "To search for files and directories based on various criteria.",
    "explanation": "The 'find' command is a powerful utility for searching for files and directories in a directory hierarchy based on a wide range of criteria such as name, type, size, modification time, and permissions. The text asks 'What are the Find and Locate Commands in Linux?' [cite: 85]"
  },
  {
    "question": "What is the primary difference between Computer Organization and Computer Architecture?",
    "options": [
      "Computer Organization focuses on the design of the instruction set, while Architecture focuses on hardware components.",
      "Computer Architecture focuses on how components are interconnected and function, while Organization focuses on the attributes visible to the programmer.",
      "Computer Organization deals with the physical implementation, while Architecture deals with the conceptual design and functional behavior.",
      "There is no significant difference; the terms are interchangeable."
    ],
    "correct_answer": "Computer Organization deals with the physical implementation, while Architecture deals with the conceptual design and functional behavior.",
    "explanation": "Computer Architecture relates to the functional behavior and logical aspects visible to the programmer (e.g., instruction set, addressing modes), while Computer Organization deals with the structural relationships and hardware implementation details. The text asks to 'Differentiate between Computer Organization and Computer Architecture.' [cite: 86]"
  },
  {
    "question": "How many selection inputs are needed for each multiplexer in a common bus system for 16 registers of 32 bits each?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correct_answer": "4",
    "explanation": "To select one of 16 registers, you need 2^N = 16, so N = 4 selection inputs. The question is explicitly asked in the problem. [cite: 90]"
  },
  {
    "question": "What is the difference between isolated I/O and memory-mapped I/O?",
    "options": [
      "Isolated I/O uses separate address spaces for memory and I/O, while memory-mapped I/O uses a single address space.",
      "Memory-mapped I/O requires special I/O instructions, while isolated I/O does not.",
      "Isolated I/O is faster than memory-mapped I/O.",
      "Memory-mapped I/O provides better security for I/O devices."
    ],
    "correct_answer": "Isolated I/O uses separate address spaces for memory and I/O, while memory-mapped I/O uses a single address space.",
    "explanation": "In isolated I/O, separate address spaces and dedicated I/O instructions are used for memory and I/O devices. In memory-mapped I/O, I/O devices share the same address space as memory, and regular memory access instructions can be used to communicate with them. The text asks 'What is the difference between isolated I/O and memory-mapped I/O?' [cite: 95]"
  },
  {
    "question": "Which of the following describes a Zombie process in UNIX?",
    "options": [
      "A process that is still running but is no longer responsive.",
      "A process that has completed execution but its entry remains in the process table because its parent has not yet read its exit status.",
      "A process that has been terminated by the operating system due to an error.",
      "A process that runs in the background without a controlling terminal."
    ],
    "correct_answer": "A process that has completed execution but its entry remains in the process table because its parent has not yet read its exit status.",
    "explanation": "A zombie process (also known as a defunct process) is a process that has completed its execution, but its entry still exists in the process table because the parent process has not yet called wait() to retrieve its exit status. The text asks 'Explain Zombie process, Orphan process and Daemon process in terms of UNIX.' [cite: 100]"
  },
  {
    "question": "What is the primary function of piping in Linux?",
    "options": [
      "To create a new directory.",
      "To link the output of one command to the input of another command.",
      "To redirect output to a file.",
      "To change file permissions."
    ],
    "correct_answer": "To link the output of one command to the input of another command.",
    "explanation": "Piping (using the '|' operator) in Linux allows the standard output of one command to be used as the standard input of another command, enabling complex operations by chaining simple commands. The text asks 'What is piping? How piping operator works? Explain with example.' [cite: 101]"
  },
  {
    "question": "Which utility is typically used for compressing files in UNIX?",
    "options": [
      "cp",
      "mv",
      "gzip",
      "ls"
    ],
    "correct_answer": "gzip",
    "explanation": "The 'gzip' utility is a widely used command-line program for compressing and decompressing files in Unix-like operating systems. The text asks 'Which utility is used for compressing files in UNIX? Describe its usage.' [cite: 103]"
  },
  {
    "question": "Why are partitions needed in Linux?",
    "options": [
      "To improve network performance.",
      "To separate different parts of the file system, manage disk space efficiently, and allow for different file systems.",
      "To run multiple operating systems simultaneously.",
      "To enhance graphic display capabilities."
    ],
    "correct_answer": "To separate different parts of the file system, manage disk space efficiently, and allow for different file systems.",
    "explanation": "Disk partitioning in Linux is essential for organizing disk space, separating the operating system from user data, allowing for different file system types, and isolating potential issues. The text asks 'Why we need partitions in Linux? Explain Root Partition and Swap Partition.' [cite: 104]"
  },
  {
    "question": "What is the main distinction between the root account and a normal user account in Linux?",
    "options": [
      "The root account has limited permissions, while normal users have full control.",
      "The root account is used for network management, while normal users are for local access.",
      "The root account has superuser privileges and unrestricted access, while normal user accounts have limited permissions.",
      "Normal user accounts can modify system files, while the root account cannot."
    ],
    "correct_answer": "The root account has superuser privileges and unrestricted access, while normal user accounts have limited permissions.",
    "explanation": "The root account (superuser) in Linux has the highest level of privileges and can perform any action on the system, including modifying system files and settings. Normal user accounts have restricted permissions for security and stability. The text asks 'What is the root account in Linux and how does it differ from a normal user account?' [cite: 106]"
  },
  {
    "question": "Which of the following is NOT a typical device type in Unix Devices?",
    "options": [
      "Block devices",
      "Character devices",
      "Network devices",
      "Printer devices"
    ],
    "correct_answer": "Printer devices",
    "explanation": "Common Unix device types include block devices (e.g., hard drives, CD-ROMs), character devices (e.g., terminals, printers), and network devices (e.g., Ethernet cards). While printers are I/O devices, 'Printer devices' as a broad category of Unix device type alongside block and character is less precise in this context. The text asks 'What are the device types of Unix Devices? Give example of each.' [cite: 107]"
  },
  {
    "question": "How does the TCP/IP protocol suite differ from the OSI suite?",
    "options": [
      "TCP/IP has more layers than OSI.",
      "TCP/IP is a theoretical model, while OSI is an implementation model.",
      "TCP/IP is a practical and widely implemented protocol suite, while OSI is a more conceptual reference model.",
      "OSI is primarily used for internet communication, while TCP/IP is for local networks."
    ],
    "correct_answer": "TCP/IP is a practical and widely implemented protocol suite, while OSI is a more conceptual reference model.",
    "explanation": "The OSI (Open Systems Interconnection) model is a theoretical, seven-layer conceptual framework, while the TCP/IP (Transmission Control Protocol/Internet Protocol) suite is a practical, four- or five-layer model that forms the basis of the internet. The text asks 'Discuss TCP/IP protocol suite. How TCP/IP is different from OSI suite?' [cite: 109]"
  },
  {
    "question": "Which command is used to display the current system date and time from the shell prompt?",
    "options": [
      "date",
      "time",
      "clock",
      "sysdate"
    ],
    "correct_answer": "date",
    "explanation": "The 'date' command is used in Linux to display or set the system date and time. The text asks 'How to set system date and time from the shell prompt?' which implies familiarity with the 'date' command. [cite: 110]"
  },
  {
    "question": "What is the function of the 'wc' command in Linux?",
    "options": [
      "To change file ownership.",
      "To count lines, words, and characters in a file.",
      "To compress files.",
      "To write content to a file."
    ],
    "correct_answer": "To count lines, words, and characters in a file.",
    "explanation": "The 'wc' command (word count) is used to count the number of lines, words, and characters in a file. It's listed as a command to explain. [cite: 110]"
  },
  {
    "question": "What is Belady’s anomaly in the context of page replacement algorithms?",
    "options": [
      "An increase in page faults when more page frames are allocated.",
      "A decrease in page faults when fewer page frames are allocated.",
      "A condition where all pages are always present in memory.",
      "A technique for faster page swapping."
    ],
    "correct_answer": "An increase in page faults when more page frames are allocated.",
    "explanation": "Belady's anomaly is a phenomenon where increasing the number of page frames results in an increase in the number of page faults, which is counterintuitive. It's often associated with the FIFO (First-In, First-Out) page replacement algorithm. The text asks 'Discuss the FIFO page replacement algorithms used in OS. What is Belady’s anomaly?' [cite: 113]"
  },
  {
    "question": "What is an Interrupt Service Routine (ISR)?",
    "options": [
      "A program that creates new interrupts.",
      "A routine that is executed when an interrupt occurs to handle the event.",
      "A process that constantly checks for hardware failures.",
      "A method for preventing interrupts from occurring."
    ],
    "correct_answer": "A routine that is executed when an interrupt occurs to handle the event.",
    "explanation": "An Interrupt Service Routine (ISR), also known as an interrupt handler, is a special block of code that the CPU executes when an interrupt occurs. Its purpose is to handle the event that caused the interrupt. The text asks 'What is Interrupt service routine (ISR)?' [cite: 113]"
  },
  {
    "question": "How do you redirect output to a file in Linux?",
    "options": [
      "Using the 'pipe' operator (|)",
      "Using the 'redirection' operator (>) or (>>)",
      "Using the 'cat' command with no arguments",
      "Using the 'echo' command without a file"
    ],
    "correct_answer": "Using the 'redirection' operator (>) or (>>)",
    "explanation": "In Linux, the '>' operator redirects the standard output of a command to a file, overwriting the file if it exists. The '>>' operator appends the output to the file. The text asks 'Through example, explain the process of redirecting output to a file.' [cite: 114]"
  },
  {
    "question": "What are file descriptors in Linux?",
    "options": [
      "Names of files and directories.",
      "Numerical identifiers for open files or I/O resources.",
      "Metadata about a file's content.",
      "Commands used to manage file permissions."
    ],
    "correct_answer": "Numerical identifiers for open files or I/O resources.",
    "explanation": "In Unix-like operating systems, a file descriptor is an abstract indicator (handle) used to access a file or other I/O resource, such as a pipe or network socket. File descriptors are non-negative integers. The text asks 'What are file descriptors in Linux?' [cite: 115]"
  },
  {
    "question": "What is the role of the Kernel in Unix OS?",
    "options": [
      "To provide a graphical user interface.",
      "To manage system resources and facilitate communication between hardware and software.",
      "To execute shell scripts.",
      "To manage user accounts and passwords."
    ],
    "correct_answer": "To manage system resources and facilitate communication between hardware and software.",
    "explanation": "The Kernel is the core of the operating system. It has complete control over everything in the system and is responsible for managing the system's resources and enabling communication between hardware and software components. The text asks 'What are Kernel and Shell in Unix OS?' [cite: 115]"
  }
	];
}

export function SetB(){
return[
  {
    "question": "What is the primary benefit of using biased representation for the exponent portion of a floating-point number?",
    "options": [
      "It simplifies multiplication operations.",
      "It allows for a larger range of numbers to be represented.",
      "It makes it easier to compare two floating-point numbers.",
      "It reduces the overall number of bits required for the exponent."
    ],
    "correct_answer": "It makes it easier to compare two floating-point numbers.",
    "explanation": "Biased representation simplifies the comparison of floating-point numbers because the exponent can be treated as a signed integer, allowing for direct comparison of the entire number. [cite: 76] The question is directly from the provided text."
  },
  {
    "question": "Differentiate between Associative Mapping and Direct Mapping in cache memory organization.",
    "options": [
      "Associative mapping is simpler to implement than direct mapping.",
      "Direct mapping allows a block to be placed anywhere in cache, while associative mapping places it in a specific location.",
      "Associative mapping offers higher flexibility in block placement, while direct mapping has a fixed block placement.",
      "Direct mapping is more expensive to implement than associative mapping."
    ],
    "correct_answer": "Associative mapping offers higher flexibility in block placement, while direct mapping has a fixed block placement.",
    "explanation": "In direct mapping, each block from main memory has a unique location in the cache. In associative mapping, a block from main memory can be placed in any location in the cache, providing more flexibility but requiring more complex hardware for searching. [cite: 77]"
  },
  {
    "question": "At the end of the execution phase for an instruction with I=0, an operation code of AND, and address 083 (hex), given memory word at 083 contains B8F2 and AC contains A937, what will be the content of the AC register?",
    "options": [
      "A937",
      "B8F2",
      "8832",
      "C1C5"
    ],
    "correct_answer": "8832",
    "explanation": "The operation is AND. AC (A937 in hex, 1010 1001 0011 0111 in binary) will be ANDed with the operand from memory (B8F2 in hex, 1011 1000 1111 0010 in binary). Performing a bitwise AND operation: (1010 1001 0011 0111) AND (1011 1000 1111 0010) = 1010 1000 0011 0010, which is 8832 in hexadecimal. [cite: 78, 79, 80]"
  },
  {
    "question": "What are the common addressing modes used in computer architecture?",
    "options": [
      "Sequential, Random, Direct, and Indirect",
      "Register, Immediate, Direct, Indirect, and Relative",
      "Read, Write, Execute, and Modify",
      "Input, Output, Process, and Storage"
    ],
    "correct_answer": "Register, Immediate, Direct, Indirect, and Relative",
    "explanation": "Common addressing modes include Immediate, Direct, Indirect, Register, Register Indirect, Relative, and Indexed addressing modes. The text specifically asks to 'Explain addressing modes in detail'. [cite: 77, 112, 60]"
  },
  {
    "question": "Which of the following describes the function of the /bin directory in the Unix file system?",
    "options": [
      "Contains configuration files.",
      "Contains user home directories.",
      "Contains essential user executable binaries.",
      "Contains device files."
    ],
    "correct_answer": "Contains essential user executable binaries.",
    "explanation": "The `/bin` directory (binaries) contains essential command binaries that are available to all users. [cite: 42]"
  },
  {
    "question": "Explain the role of the Process Control Block (PCB) during process execution.",
    "options": [
      "It controls the CPU's clock speed.",
      "It stores all the information needed to manage a process, enabling context switching.",
      "It manages network connections for a process.",
      "It is responsible for compiling the source code of a program."
    ],
    "correct_answer": "It stores all the information needed to manage a process, enabling context switching.",
    "explanation": "The Process Control Block (PCB) is a data structure containing information about a process (e.g., process state, program counter, CPU registers, memory-management information), and it is crucial for enabling context switching between processes. [cite: 49, 97]"
  },
  {
    "question": "What is the primary advantage of 2's complement over 1's complement representation for negative numbers?",
    "options": [
      "It uses fewer bits to represent numbers.",
      "It has a simpler subtraction operation.",
      "It has only one representation for zero.",
      "It allows for a larger positive range."
    ],
    "correct_answer": "It has only one representation for zero.",
    "explanation": "One of the key advantages of 2's complement representation is that it provides a unique representation for zero, eliminating the issue of both positive and negative zero found in 1's complement. [cite: 36]"
  },
  {
    "question": "What are the different types of I/O modes of data transfer?",
    "options": [
      "Serial and Parallel transfer.",
      "Synchronous and Asynchronous transfer.",
      "Programmed I/O, Interrupt-Initiated I/O, and Direct Memory Access (DMA).",
      "Block transfer and Character transfer."
    ],
    "correct_answer": "Programmed I/O, Interrupt-Initiated I/O, and Direct Memory Access (DMA).",
    "explanation": "The different modes of data transfer commonly refer to how the CPU interacts with I/O devices: Programmed I/O, Interrupt-Initiated I/O, and Direct Memory Access (DMA). [cite: 39]"
  },
  {
    "question": "What is the relation between Priority and SJF (Shortest Job First) CPU scheduling algorithms?",
    "options": [
      "SJF is a special case of priority scheduling where priority is inversely proportional to the job's burst time.",
      "Priority scheduling is a special case of SJF where higher priority jobs are always shorter.",
      "They are entirely unrelated algorithms.",
      "Both are preemptive by nature."
    ],
    "correct_answer": "SJF is a special case of priority scheduling where priority is inversely proportional to the job's burst time.",
    "explanation": "SJF (Shortest Job First) can be considered a special case of priority scheduling where the priority of a process is determined by the inverse of its next CPU burst time (i.e., shorter jobs have higher priority). [cite: 41]"
  },
  {
    "question": "Which of the following is a disadvantage of the First Fit memory allocation algorithm?",
    "options": [
      "It always finds the smallest possible hole.",
      "It is computationally complex.",
      "It can lead to significant external fragmentation.",
      "It always chooses the best possible fit."
    ],
    "correct_answer": "It can lead to significant external fragmentation.",
    "explanation": "First Fit allocates the first hole that is large enough. While fast, it can leave small, unusable fragments of memory at the beginning of the memory space, leading to external fragmentation. [cite: 41]"
  },
  {
    "question": "What information does the /dev directory of the Unix file system contain?",
    "options": [
      "User home directories.",
      "System logs.",
      "Device files (interface to hardware devices).",
      "Temporary files."
    ],
    "correct_answer": "Device files (interface to hardware devices).",
    "explanation": "The `/dev` directory (devices) contains special files that represent hardware devices. These files allow user programs to interact with the hardware. [cite: 42]"
  },
  {
    "question": "What is Redirection in Linux?",
    "options": [
      "A feature that allows users to change their home directory.",
      "A mechanism to send the output of a command to a file or another command's input, or to take input from a file.",
      "A way to change the ownership of a file.",
      "A method for creating new processes."
    ],
    "correct_answer": "A mechanism to send the output of a command to a file or another command's input, or to take input from a file.",
    "explanation": "Redirection in Linux allows you to change the standard input or standard output of a command, typically sending output to a file (using `>` or `>>`) or taking input from a file (using `<`). [cite: 45]"
  },
  {
    "question": "What is the purpose of an 'indirect address instruction' in computer architecture?",
    "options": [
      "The address field directly contains the operand.",
      "The address field contains the effective address of the operand.",
      "The address field contains the address of a memory location where the effective address of the operand is stored.",
      "The address field specifies a CPU register that holds the operand."
    ],
    "correct_answer": "The address field contains the address of a memory location where the effective address of the operand is stored.",
    "explanation": "In an indirect address instruction, the address part of the instruction does not specify the operand directly, nor does it specify the address of the operand. Instead, it specifies a memory location whose content is the effective address of the operand. [cite: 46, 92]"
  },
  {
    "question": "What is 'access time' in the context of memory systems?",
    "options": [
      "The time it takes for the CPU to execute an instruction.",
      "The total time required to perform a read or write operation, from the start of the memory access to the completion of the data transfer.",
      "The time it takes for a disk to rotate to the desired sector.",
      "The time taken to move the read/write head to the desired track."
    ],
    "correct_answer": "The total time required to perform a read or write operation, from the start of the memory access to the completion of the data transfer.",
    "explanation": "Access time refers to the time interval between the initiation of a memory operation (read/write) and its completion. [cite: 46]"
  },
  {
    "question": "Why is Linux regarded as a more secure operating system than other operating systems?",
    "options": [
      "Because it is less popular and thus less targeted by malware.",
      "Because of its open-source nature, robust permission system, and frequent security updates.",
      "Because it does not support internet connectivity.",
      "Because it lacks a graphical user interface."
    ],
    "correct_answer": "Because of its open-source nature, robust permission system, and frequent security updates.",
    "explanation": "Linux's security strengths stem from its open-source nature (allowing for peer review of code), a strong user and file permission model, and a community-driven approach to security updates and patches. [cite: 48]"
  },
  {
    "question": "What information does a Process Control Block (PCB) typically contain?",
    "options": [
      "Only the process ID and name.",
      "Process state, program counter, CPU registers, memory management information, and I/O status information.",
      "The complete executable code of the process.",
      "A list of all files opened by the process."
    ],
    "correct_answer": "Process state, program counter, CPU registers, memory management information, and I/O status information.",
    "explanation": "A Process Control Block (PCB) is a data structure that contains all information about a process, including its current state, program counter, CPU register values, memory management details, and I/O status. [cite: 49]"
  },
  {
    "question": "What is the primary role of the Linux Shell?",
    "options": [
      "To manage system hardware devices.",
      "To provide a command-line interpreter that allows users to interact with the operating system.",
      "To organize and display graphical windows.",
      "To perform kernel-level operations."
    ],
    "correct_answer": "To provide a command-line interpreter that allows users to interact with the operating system.",
    "explanation": "The Linux Shell is a command-line interpreter that serves as the interface between the user and the operating system's kernel, allowing users to execute commands. [cite: 50]"
  },
  {
    "question": "Given a memory unit with 256K words of 32 bits each, how many bits are in the address part of an instruction if the instruction has an indirect bit, an operation code, a register code part (64 registers), and an address part?",
    "options": [
      "18 bits",
      "16 bits",
      "8 bits",
      "10 bits"
    ],
    "correct_answer": "18 bits",
    "explanation": "256K words = 2^8 * 2^10 = 2^18 words. Therefore, the address part needs 18 bits to address any word in memory. [cite: 51, 53, 54]"
  },
  {
    "question": "How does the 'find' command interact with file permissions when searching for files?",
    "options": [
      "It ignores file permissions.",
      "It only searches in directories where the user has write permissions.",
      "It considers file permissions and may fail to search directories or access files where the user lacks appropriate read/execute permissions.",
      "It automatically elevates permissions to search all directories."
    ],
    "correct_answer": "It considers file permissions and may fail to search directories or access files where the user lacks appropriate read/execute permissions.",
    "explanation": "The 'find' command operates within the context of the user's permissions. If the user does not have sufficient read or execute permissions for certain directories or files, 'find' will not be able to access or list them. [cite: 58]"
  },
  {
    "question": "What is 'Asynchronous data transfer'?",
    "options": [
      "Data transfer that relies on a common clock signal for synchronization.",
      "Data transfer where sender and receiver operate independently using control signals to coordinate.",
      "Data transfer that occurs simultaneously in both directions.",
      "Data transfer that is always faster than synchronous transfer."
    ],
    "correct_answer": "Data transfer where sender and receiver operate independently using control signals to coordinate.",
    "explanation": "Asynchronous data transfer involves communication between independent units without a shared clock. Instead, control signals (like handshaking signals) are used to indicate data availability and readiness. [cite: 30, 61]"
  },
  {
    "question": "What is the primary characteristic of RISC (Reduced Instruction Set Computer) architecture?",
    "options": [
      "It uses a large and complex set of instructions.",
      "It emphasizes a small, highly optimized set of instructions that execute quickly.",
      "It requires microprogramming for instruction execution.",
      "It has a variable instruction format."
    ],
    "correct_answer": "It emphasizes a small, highly optimized set of instructions that execute quickly.",
    "explanation": "RISC architecture focuses on a smaller, simpler, and highly optimized set of instructions, which typically execute in a single clock cycle, enabling faster processing. [cite: 61]"
  },
  {
    "question": "What is 'Page replacement' in operating systems?",
    "options": [
      "The process of copying a page from main memory to disk.",
      "The process of swapping pages between main memory and secondary storage when a page fault occurs.",
      "A method for organizing data within a memory page.",
      "The technique of allocating contiguous memory blocks to processes."
    ],
    "correct_answer": "The process of swapping pages between main memory and secondary storage when a page fault occurs.",
    "explanation": "Page replacement algorithms are used in virtual memory systems to decide which page to remove from main memory when a new page needs to be loaded and there are no free frames (a page fault occurs). [cite: 63]"
  },
  {
    "question": "Why is partitioning and formatting a prerequisite to install an operating system?",
    "options": [
      "To create backup copies of existing data.",
      "To organize the disk into logical units and prepare it for storing files in a file system format.",
      "To optimize network connectivity for the operating system.",
      "To install device drivers before the OS."
    ],
    "correct_answer": "To organize the disk into logical units and prepare it for storing files in a file system format.",
    "explanation": "Partitioning divides the hard drive into logical sections, and formatting prepares these partitions with a file system, making them ready to store data and allowing the operating system to be installed. [cite: 65]"
  },
  {
    "question": "What is 'Associative memory'?",
    "options": [
      "Memory that stores data in a fixed, addressable location.",
      "Memory that stores data based on its content rather than its address, allowing for parallel searches.",
      "Memory used for temporary storage during program execution.",
      "Memory that is slower than traditional RAM but cheaper."
    ],
    "correct_answer": "Memory that stores data based on its content rather than its address, allowing for parallel searches.",
    "explanation": "Associative memory (also known as Content Addressable Memory or CAM) is a type of computer memory used for very fast searching applications. It stores data such that it can be retrieved based on its content, not its address. [cite: 65, 94]"
  },
  {
    "question": "What is an 'instruction cycle' in a computer?",
    "options": [
      "The time it takes for a program to compile.",
      "The sequence of steps a CPU follows to execute a single instruction.",
      "The process of transferring data between memory and I/O devices.",
      "The cycle of power on and off for a computer."
    ],
    "correct_answer": "The sequence of steps a CPU follows to execute a single instruction.",
    "explanation": "An instruction cycle (also known as a fetch-decode-execute cycle) is the fundamental process by which a computer's CPU executes each instruction in a program. It typically involves fetching the instruction, decoding it, and then executing it. [cite: 69]"
  },
  {
    "question": "What is the advantage of 'interrupt initiated I/O'?",
    "options": [
      "It requires the CPU to constantly poll I/O devices, wasting CPU cycles.",
      "It allows the CPU to perform other tasks while an I/O operation is in progress, improving efficiency.",
      "It is simpler to implement than programmed I/O.",
      "It guarantees faster data transfer rates than DMA."
    ],
    "correct_answer": "It allows the CPU to perform other tasks while an I/O operation is in progress, improving efficiency.",
    "explanation": "Interrupt-initiated I/O allows the CPU to continue processing other tasks after initiating an I/O operation. The I/O device signals the CPU with an interrupt when the operation is complete, thus freeing the CPU from busy-waiting. [cite: 71]"
  },
  {
    "question": "What is 'Virtual Memory Address Translation'?",
    "options": [
      "The process of converting a virtual address used by the CPU into a physical address in main memory.",
      "The process of translating machine code into assembly language.",
      "The conversion of a network address into a physical device address.",
      "The mapping of cache memory addresses to main memory addresses."
    ],
    "correct_answer": "The process of converting a virtual address used by the CPU into a physical address in main memory.",
    "explanation": "Virtual memory address translation is the mechanism by which the operating system translates the virtual addresses generated by the CPU into physical addresses in RAM. [cite: 74]"
  },
  {
    "question": "What is the primary function of a 'Data Register' (DR) in a basic computer organization?",
    "options": [
      "To store the address of the next instruction to be executed.",
      "To hold the data read from or written to memory, or data transferred from input/output devices.",
      "To store the current instruction being executed.",
      "To perform arithmetic and logical operations."
    ],
    "correct_answer": "To hold the data read from or written to memory, or data transferred from input/output devices.",
    "explanation": "The Data Register (DR) acts as a buffer for data transferred between the CPU and memory or I/O devices. [cite: 68]"
  },
  {
    "question": "What are the common addressing modes mentioned in the context of Opcode and Operand?",
    "options": [
      "Immediate, Direct, Indirect, Register, and Register Indirect.",
      "Read, Write, Execute, and Fetch.",
      "Binary, Octal, Decimal, and Hexadecimal.",
      "Sequential, Parallel, and Distributed."
    ],
    "correct_answer": "Immediate, Direct, Indirect, Register, and Register Indirect.",
    "explanation": "The text asks to 'Explain different addressing modes' in the context of Opcode and Operand. Common addressing modes include Immediate, Direct, Indirect, Register, and Register Indirect. [cite: 112]"
  },
  {
    "question": "What is 'Belady’s anomaly' in the context of FIFO page replacement algorithm?",
    "options": [
      "The phenomenon where increasing the number of page frames results in fewer page faults.",
      "The phenomenon where increasing the number of page frames results in more page faults.",
      "A condition where all page faults are eliminated.",
      "A technique to optimize page replacement."
    ],
    "correct_answer": "The phenomenon where increasing the number of page frames results in more page faults.",
    "explanation": "Belady's anomaly, observed in some page replacement algorithms like FIFO, is when an increase in the number of available memory frames actually leads to an increase in the number of page faults. [cite: 113]"
  },
  {
    "question": "What is the primary purpose of an 'Interrupt Service Routine (ISR)'?",
    "options": [
      "To generate new interrupt requests.",
      "To handle the specific event that caused an interrupt.",
      "To periodically check for hardware errors.",
      "To prevent any interrupts from occurring during critical operations."
    ],
    "correct_answer": "To handle the specific event that caused an interrupt.",
    "explanation": "An Interrupt Service Routine (ISR) is a specific piece of code that the CPU executes in response to an interrupt, addressing the cause of the interrupt and resuming normal operation. [cite: 113]"
  },
  {
    "question": "Which Linux command is typically used to view basic file permissions?",
    "options": [
      "chmod",
      "chown",
      "ls -l",
      "grep"
    ],
    "correct_answer": "ls -l",
    "explanation": "The `ls -l` command lists files in a long format, which includes detailed information about file permissions, ownership, size, and modification date. [cite: 115]"
  },
  {
    "question": "What is the primary difference between a 'Process' and a 'Thread'?",
    "options": [
      "Processes share the same memory space, while threads have separate memory spaces.",
      "A process is a heavyweight entity with its own address space, while a thread is a lightweight unit of execution within a process, sharing its resources.",
      "Threads can run independently on different machines, while processes cannot.",
      "Processes are used for single-tasking, and threads for multitasking."
    ],
    "correct_answer": "A process is a heavyweight entity with its own address space, while a thread is a lightweight unit of execution within a process, sharing its resources.",
    "explanation": "A process is an independent program in execution with its own dedicated memory space and resources. A thread, on the other hand, is a lighter-weight unit of execution within a process, sharing the same memory space and resources with other threads of the same process. [cite: 116, 7]"
  },
  {
    "question": "What is the primary function of the 'Shell' in Unix OS?",
    "options": [
      "To manage hardware resources.",
      "To provide a command-line interface for user interaction with the kernel.",
      "To allocate memory to running programs.",
      "To handle network communication."
    ],
    "correct_answer": "To provide a command-line interface for user interaction with the kernel.",
    "explanation": "The Shell acts as an interpreter, translating user commands into instructions that the operating system's kernel can understand and execute. [cite: 116]"
  },
  {
    "question": "Which of the following best describes the function of an 'Address Register' (AR)?",
    "options": [
      "It stores data to be processed by the ALU.",
      "It holds the address of a memory location from which data is to be fetched or to which data is to be stored.",
      "It keeps track of the next instruction to be executed.",
      "It performs logical operations."
    ],
    "correct_answer": "It holds the address of a memory location from which data is to be fetched or to which data is to be stored.",
    "explanation": "The Address Register (AR) stores the memory address of the data or instruction that the CPU needs to access. [cite: 68, 111]"
  },
  {
    "question": "What is the primary function of an 'Accumulator Register' (AC)?",
    "options": [
      "To store the address of an instruction.",
      "To hold the operands and results of arithmetic and logical operations.",
      "To keep track of input/output device status.",
      "To store the instruction fetched from memory."
    ],
    "correct_answer": "To hold the operands and results of arithmetic and logical operations.",
    "explanation": "The Accumulator (AC) is a general-purpose register used by the Arithmetic Logic Unit (ALU) to store intermediate results and operands during arithmetic and logical operations. [cite: 68, 111]"
  },
  {
    "question": "What does 'Opcode' refer to in the context of addressing modes?",
    "options": [
      "The value of the operand.",
      "The portion of an instruction that specifies the operation to be performed.",
      "The memory address where the operand is located.",
      "The number of registers involved in an instruction."
    ],
    "correct_answer": "The portion of an instruction that specifies the operation to be performed.",
    "explanation": "The Opcode (Operation Code) is the part of an instruction that dictates the specific operation (e.g., ADD, SUB, LOAD) to be carried out by the CPU. [cite: 112]"
  },
  {
    "question": "What is 'Virtual Memory'?",
    "options": [
      "Physical RAM installed in the computer.",
      "A technique that allows a computer to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage.",
      "A type of fast, small memory used by the CPU for quick access.",
      "Memory dedicated solely to graphics processing."
    ],
    "correct_answer": "A technique that allows a computer to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage.",
    "explanation": "Virtual memory is a memory management capability that provides an 'idealized' view of the storage resources. It allows programs to run even if they are larger than the physical memory available, by using disk space as an extension of RAM. [cite: 9, 61]"
  },
  {
    "question": "What are 'Logic Gates'?",
    "options": [
      "Physical switches used to control power flow.",
      "Basic building blocks of digital circuits that perform fundamental logical operations.",
      "Software programs that manage logical partitions on a hard drive.",
      "Components that store electrical charge."
    ],
    "correct_answer": "Basic building blocks of digital circuits that perform fundamental logical operations.",
    "explanation": "Logic gates are elementary building blocks of digital circuits. They take one or more binary inputs and produce a single binary output based on a logical relationship (e.g., AND, OR, NOT). [cite: 34]"
  },
  {
    "question": "Which of the following is a 'Universal Gate'?",
    "options": [
      "AND gate",
      "OR gate",
      "XOR gate",
      "NAND gate"
    ],
    "correct_answer": "NAND gate",
    "explanation": "Universal gates are those that can be used to construct any other logic gate (AND, OR, NOT, XOR, etc.). NAND and NOR gates are universal gates. [cite: 34]"
  },
  {
    "question": "What is the purpose of the 'chmod' system call?",
    "options": [
      "To change the owner of a file.",
      "To change the permissions (access modes) of a file or directory.",
      "To create a new file.",
      "To change the modification time of a file."
    ],
    "correct_answer": "To change the permissions (access modes) of a file or directory.",
    "explanation": "The `chmod` (change mode) system call is used to change the file system permissions of file system objects (files and directories). [cite: 8]"
  },
  {
    "question": "What is the role of the 'find' command in Linux?",
    "options": [
      "To display information about the Linux system.",
      "To search for files and directories within a specified directory hierarchy.",
      "To install new software packages.",
      "To manage network connections."
    ],
    "correct_answer": "To search for files and directories within a specified directory hierarchy.",
    "explanation": "The `find` command is used to locate files and directories based on various criteria within a specified directory tree. [cite: 85]"
  },
  {
    "question": "What are 'Symbolic Links' in Linux?",
    "options": [
      "Hard links that point to directories.",
      "Files that contain the actual data of another file.",
      "Special files that point to other files or directories by their path, similar to shortcuts.",
      "Links that are automatically deleted when the original file is removed."
    ],
    "correct_answer": "Special files that point to other files or directories by their path, similar to shortcuts.",
    "explanation": "Symbolic links (soft links) are special files that serve as references to other files or directories. They contain the path to the target file or directory. [cite: 9]"
  },
  {
    "question": "What is the primary function of the 'ioctl' system call?",
    "options": [
      "To create a new process.",
      "To perform device-specific input/output operations not available through regular read/write calls.",
      "To change the ownership of a file.",
      "To put the calling process to sleep for a specified time."
    ],
    "correct_answer": "To perform device-specific input/output operations not available through regular read/write calls.",
    "explanation": "The `ioctl` (input/output control) system call is used for device-specific operations and to control device drivers, performing functions beyond simple read and write operations. [cite: 8]"
  },
  {
    "question": "How does 'Handshaking method' of Asynchronous data transfer work?",
    "options": [
      "It relies on a shared clock signal for synchronization.",
      "It uses control signals between sender and receiver to ensure data readiness and acceptance.",
      "It transmits data in fixed-size blocks without acknowledgement.",
      "It uses a single wire for both data and control signals."
    ],
    "correct_answer": "It uses control signals between sender and receiver to ensure data readiness and acceptance.",
    "explanation": "In the handshaking method of asynchronous data transfer, control signals are exchanged between the sender and receiver to ensure that data is transmitted only when both parties are ready, providing reliable communication without a common clock. [cite: 3]"
  },
  {
    "question": "What is the 'Von-Neumann architecture'?",
    "options": [
      "An architecture where instructions and data are stored in separate memory units.",
      "An architecture where the CPU directly accesses I/O devices without memory mediation.",
      "An architecture that uses a single address space for both instructions and data, allowing them to be stored in the same memory.",
      "An architecture that focuses solely on parallel processing."
    ],
    "correct_answer": "An architecture that uses a single address space for both instructions and data, allowing them to be stored in the same memory.",
    "explanation": "The Von-Neumann architecture is characterized by a stored-program concept, where both instructions and data are held in a single, shared memory space, accessible by a single address bus. [cite: 86]"
  },
  {
    "question": "What are the essential components of a Linux system?",
    "options": [
      "Hardware only.",
      "Kernel, Shell, System Utilities/Libraries, and Applications.",
      "User, Processes, and Files.",
      "Monitor, Keyboard, and Mouse."
    ],
    "correct_answer": "Kernel, Shell, System Utilities/Libraries, and Applications.",
    "explanation": "A Linux system typically comprises the Kernel (the core), the Shell (command-line interface), system utilities and libraries (commands, system calls), and various applications. [cite: 47, 97]"
  }
]
}

export function SetC(){
return [
  {
    "question": "What is the key characteristic of an 'Orphan process' in UNIX?",
    "options": [
      "A process that is running in the background without a terminal.",
      "A process whose parent process has terminated before it.",
      "A process that is waiting for an I/O operation to complete.",
      "A process that has completed its execution but its entry is still in the process table."
    ],
    "correct_answer": "A process whose parent process has terminated before it.",
    "explanation": "An orphan process is a process that is still running, but its parent process has finished or been terminated. These processes are then adopted by the 'init' process (process ID 1)."
  },
  {
    "question": "What is the primary function of a 'Daemon process' in UNIX?",
    "options": [
      "Processes that are explicitly launched by a user for interactive tasks.",
      "Processes that are created when a parent process exits before its child.",
      "Background processes that run without a controlling terminal, often performing system tasks.",
      "Processes that are stuck in an infinite loop and consume excessive CPU."
    ],
    "correct_answer": "Background processes that run without a controlling terminal, often performing system tasks.",
    "explanation": "Daemon processes are background processes that operate without direct user interaction or a controlling terminal. They are commonly used to provide services or perform system-level tasks (e.g., web servers, print spoolers)."
  },
  {
    "question": "In the context of the vi text editor, what is the 'grep' command primarily used for?",
    "options": [
      "To insert new text into the file.",
      "To save the current file and exit the editor.",
      "To search for patterns within text files.",
      "To delete lines from the file."
    ],
    "correct_answer": "To search for patterns within text files.",
    "explanation": "The `grep` command (Global Regular Expression Print) is a powerful utility for searching plain-text data sets for lines that match a regular expression. In the context of vi, it's used to search for content."
  },
  {
    "question": "What is the purpose of the 'rmdir' command in Linux?",
    "options": [
      "To remove files.",
      "To remove empty directories.",
      "To rename directories.",
      "To move directories to a different location."
    ],
    "correct_answer": "To remove empty directories.",
    "explanation": "The `rmdir` command is used to remove empty directories. If a directory contains files or other subdirectories, `rmdir` will fail."
  },
  {
    "question": "What is the main advantage of a 'Distributed Operating System'?",
    "options": [
      "It operates on a single powerful machine, simplifying management.",
      "It offers increased reliability, resource sharing, and computational speed through networked computers.",
      "It is easier to implement and debug than centralized systems.",
      "It isolates faults to individual machines, preventing system-wide failures."
    ],
    "correct_answer": "It offers increased reliability, resource sharing, and computational speed through networked computers.",
    "explanation": "Advantages of a distributed operating system include fault tolerance (increased reliability), the ability to share resources (like printers or files) across multiple machines, and enhanced computational power by utilizing multiple processors."
  },
  {
    "question": "Which of the following best describes 'Context Switching' in an operating system?",
    "options": [
      "The process of switching between different user interfaces.",
      "The mechanism by which the CPU saves the state of one process and restores the state of another process.",
      "The act of changing the execution mode from user mode to kernel mode.",
      "The process of moving data between cache and main memory."
    ],
    "correct_answer": "The mechanism by which the CPU saves the state of one process and restores the state of another process.",
    "explanation": "Context switching is a fundamental operation in multitasking operating systems that involves saving the state of the current process and loading the state of another process, allowing the CPU to switch between them."
  },
  {
    "question": "What is the significance of the 'Program Counter' (PC) register?",
    "options": [
      "It holds the current instruction being executed.",
      "It stores the result of the last arithmetic operation.",
      "It contains the memory address of the next instruction to be fetched and executed.",
      "It is used for temporary storage of data."
    ],
    "correct_answer": "It contains the memory address of the next instruction to be fetched and executed.",
    "explanation": "The Program Counter (PC) is a special-purpose register that always points to the memory address of the next instruction that the CPU should execute."
  },
  {
    "question": "What is the purpose of a 'Karnaugh Map' (K-map) in digital logic design?",
    "options": [
      "To design complex sequential circuits.",
      "To minimize Boolean expressions and simplify logic circuits.",
      "To simulate the behavior of digital circuits.",
      "To convert analog signals to digital signals."
    ],
    "correct_answer": "To minimize Boolean expressions and simplify logic circuits.",
    "explanation": "A Karnaugh Map (K-map) is a graphical method used to simplify Boolean algebra expressions, making it easier to design and implement logic circuits with fewer gates."
  },
  {
    "question": "What is the role of the 'Window Manager' in Unix GUI?",
    "options": [
      "It manages network connections for graphical applications.",
      "It controls the placement, appearance, and behavior of graphical windows on a display.",
      "It compiles and executes graphical programs.",
      "It handles input from the mouse and keyboard."
    ],
    "correct_answer": "It controls the placement, appearance, and behavior of graphical windows on a display.",
    "explanation": "A window manager is a system software that controls the placement and appearance of windows within a windowing system in a graphical user interface (GUI)."
  },
  {
    "question": "What is the function of the 'cat' command in the context of the vi text editor commands?",
    "options": [
      "To concatenate and display file content on the standard output.",
      "To create new empty files.",
      "To change the permissions of a file.",
      "To search for specific text within a file."
    ],
    "correct_answer": "To concatenate and display file content on the standard output.",
    "explanation": "The `cat` command (concatenate) is primarily used to display the content of files to the standard output. While not a direct vi editor command for manipulation, it's a common Linux command for viewing files which can be used in conjunction with editing."
  },
  {
    "question": "What is 'Segmentation' as a memory management technique?",
    "options": [
      "A technique that divides memory into fixed-size pages.",
      "A memory management scheme that supports the user's view of memory, which is a collection of variable-sized segments.",
      "A method for allocating memory contiguously to processes.",
      "A technique used to swap data between RAM and the CPU cache."
    ],
    "correct_answer": "A memory management scheme that supports the user's view of memory, which is a collection of variable-sized segments.",
    "explanation": "Segmentation is a memory management scheme that divides a program into logical segments (e.g., code segment, data segment, stack segment), each with its own base address and limit. These segments can be loaded into non-contiguous memory locations."
  },
  {
    "question": "In a common bus system for 16 registers of 32 bits each, how many multiplexers are needed if each multiplexer has 4 selection inputs?",
    "options": [
      "4",
      "16",
      "32",
      "64"
    ],
    "correct_answer": "32",
    "explanation": "Since each register is 32 bits, and each bit needs a separate multiplexer, 32 multiplexers are needed for the 32 data lines. Each multiplexer will have 16 inputs (one from each register) and 4 selection inputs to choose one of the 16 registers."
  },
  {
    "question": "What is the role of the 'Memory Address Register' (MAR) in computer organization?",
    "options": [
      "To store the instruction being executed.",
      "To hold the data being transferred to or from memory.",
      "To store the address of the memory location that is to be accessed (read from or written to).",
      "To perform arithmetic calculations."
    ],
    "correct_answer": "To store the address of the memory location that is to be accessed (read from or written to).",
    "explanation": "The Memory Address Register (MAR) holds the address of the memory location that the CPU wants to access for a read or write operation."
  },
  {
    "question": "What is the primary characteristic of 'CISCs' (Complex Instruction Set Computers)?",
    "options": [
      "They have a small number of simple instructions.",
      "They feature a large and complex instruction set, with variable-length instructions and multiple addressing modes.",
      "They prioritize single-cycle instruction execution.",
      "They rely heavily on software to interpret instructions."
    ],
    "correct_answer": "They feature a large and complex instruction set, with variable-length instructions and multiple addressing modes.",
    "explanation": "CISCs are characterized by their extensive instruction sets, which often include complex operations that can perform multiple low-level operations with a single instruction."
  },
  {
    "question": "What is 'Direct Memory Access' (DMA)?",
    "options": [
      "A CPU operation that directly accesses input/output ports.",
      "A feature allowing hardware subsystems (e.g., disk drive controller) to access main system memory independently of the CPU.",
      "A type of memory that can be accessed directly by the program counter.",
      "A method to directly execute instructions from ROM."
    ],
    "correct_answer": "A feature allowing hardware subsystems (e.g., disk drive controller) to access main system memory independently of the CPU.",
    "explanation": "DMA enables high-speed data transfer between peripheral devices and memory directly, without the constant intervention of the CPU, thus freeing up the CPU for other tasks."
  },
  {
    "question": "What is the primary difference between RAM and ROM?",
    "options": [
      "RAM is non-volatile, while ROM is volatile.",
      "RAM is read-only, while ROM is read/write.",
      "RAM is volatile and read/write, while ROM is non-volatile and primarily read-only.",
      "RAM is slower than ROM."
    ],
    "correct_answer": "RAM is volatile and read/write, while ROM is non-volatile and primarily read-only.",
    "explanation": "RAM (Random Access Memory) is volatile (loses data when power is off) and allows both reading and writing. ROM (Read-Only Memory) is non-volatile (retains data without power) and is primarily used for reading, typically storing firmware."
  },
  {
    "question": "What is the significance of the '/etc/shadow' file in Linux?",
    "options": [
      "It stores encrypted user passwords and password expiration information.",
      "It contains a list of all installed software packages.",
      "It holds network configuration settings.",
      "It logs system errors and warnings."
    ],
    "correct_answer": "It stores encrypted user passwords and password expiration information.",
    "explanation": "The `/etc/shadow` file stores encrypted user passwords and related password expiration information, providing enhanced security by separating password hashes from the publicly readable `/etc/passwd` file."
  },
  {
    "question": "What is the 'FIFO page replacement algorithm'?",
    "options": [
      "An algorithm that replaces the page that has been in memory for the shortest amount of time.",
      "An algorithm that replaces the page that has been in memory for the longest amount of time.",
      "An algorithm that replaces the page that will not be used for the longest period of time.",
      "An algorithm that replaces the page that has been used least recently."
    ],
    "correct_answer": "An algorithm that replaces the page that has been in memory for the longest amount of time.",
    "explanation": "FIFO (First-In, First-Out) page replacement algorithm works on the principle that the page that has resided in memory for the longest time is replaced when a new page needs to be loaded."
  },
  {
    "question": "What is the purpose of the 'locate' command in Linux?",
    "options": [
      "To display the current working directory.",
      "To search for files in a pre-built database, providing fast results.",
      "To create symbolic links to files.",
      "To compress and decompress files."
    ],
    "correct_answer": "To search for files in a pre-built database, providing fast results.",
    "explanation": "The `locate` command searches a database (usually updated daily) of all files and directories on the system. This makes it very fast for finding files, but the database might not be up-to-date with the very latest changes."
  },
  {
    "question": "How does 'Piping' (using '|') work in Linux?",
    "options": [
      "It executes two commands simultaneously in parallel.",
      "It sends the standard output of one command as the standard input to another command.",
      "It stores the output of a command in a temporary file.",
      "It allows remote execution of commands over a network."
    ],
    "correct_answer": "It sends the standard output of one command as the standard input to another command.",
    "explanation": "The pipe operator `|` allows you to chain commands together, where the output of the command on the left side of the pipe becomes the input for the command on the right side."
  },
  {
    "question": "What is a 'System Call' in an operating system?",
    "options": [
      "A call made by a user directly to the hardware.",
      "A programmatic way in which a computer program requests a service from the kernel of the operating system.",
      "A function within an application program.",
      "A remote procedure call between two networked computers."
    ],
    "correct_answer": "A programmatic way in which a computer program requests a service from the kernel of the operating system.",
    "explanation": "System calls provide an interface between a process and the operating system. They allow user-level programs to access services provided by the operating system, such as file I/O, process management, and memory management."
  },
  {
    "question": "Which Linux command is used to set the system date and time?",
    "options": [
      "time",
      "clock",
      "date",
      "sync"
    ],
    "correct_answer": "date",
    "explanation": "The `date` command in Linux is used to display or set the system's current date and time."
  },
  {
    "question": "What are the advantages of using 'Threads' over 'Processes'?",
    "options": [
      "Threads are more isolated and provide better security.",
      "Threads require more memory overhead than processes.",
      "Threads offer faster context switching and resource sharing within the same process.",
      "Threads are always executed on different CPUs."
    ],
    "correct_answer": "Threads offer faster context switching and resource sharing within the same process.",
    "explanation": "Benefits of threads include faster context switching (as they share the same address space), easier communication and data sharing between threads within the same process, and less overhead compared to creating new processes."
  },
  {
    "question": "What is the primary function of the 'Instruction Register' (IR)?",
    "options": [
      "To store the address of the next instruction.",
      "To hold the instruction currently being executed or decoded.",
      "To store temporary data during calculations.",
      "To manage input and output operations."
    ],
    "correct_answer": "To hold the instruction currently being executed or decoded.",
    "explanation": "The Instruction Register (IR) stores the instruction that the CPU is currently processing. This instruction is then decoded and executed."
  },
  {
    "question": "What is the significance of 'Root Partition' in Linux?",
    "options": [
      "It is a partition used exclusively for user data.",
      "It is the top-level directory in the Linux file system hierarchy, containing all other directories and files.",
      "It is a special partition used for swapping data in and out of RAM.",
      "It is the partition where the boot loader resides."
    ],
    "correct_answer": "It is the top-level directory in the Linux file system hierarchy, containing all other directories and files.",
    "explanation": "The root partition (/) is the most important partition in Linux. It contains the root directory, which is the base of the entire file system hierarchy. All other directories and files are located under the root directory."
  },
  {
    "question": "What is the purpose of 'Swap Partition' in Linux?",
    "options": [
      "To store executable binary files.",
      "To provide an additional space on the hard disk that is used as virtual memory when RAM is full.",
      "To store system configuration files.",
      "To store temporary files created by applications."
    ],
    "correct_answer": "To provide an additional space on the hard disk that is used as virtual memory when RAM is full.",
    "explanation": "The swap partition is a dedicated disk space used by the operating system as virtual memory. When physical RAM is full, less frequently used pages of memory are moved to the swap space, freeing up RAM for active processes."
  },
  {
    "question": "What is 'Memory-Mapped I/O'?",
    "options": [
      "A technique where I/O devices are accessed through dedicated I/O instructions.",
      "A method where I/O devices and memory share the same address space, allowing I/O operations to be performed using regular memory access instructions.",
      "A type of memory specifically designed for input/output operations.",
      "A mapping between physical memory and virtual memory addresses."
    ],
    "correct_answer": "A method where I/O devices and memory share the same address space, allowing I/O operations to be performed using regular memory access instructions.",
    "explanation": "In memory-mapped I/O, control registers and data buffers of I/O devices are mapped to specific memory addresses. The CPU can then access these registers and buffers using the same instructions it uses to access memory."
  },
  {
    "question": "What is the purpose of the 'mv' command in Linux?",
    "options": [
      "To copy files and directories.",
      "To move or rename files and directories.",
      "To create new files.",
      "To list directory contents."
    ],
    "correct_answer": "To move or rename files and directories.",
    "explanation": "The `mv` command is used for two primary purposes: moving files or directories from one location to another, and renaming files or directories."
  },
  {
    "question": "What is the primary function of 'Binary Coded Decimal (BCD)'?",
    "options": [
      "To represent numbers using only binary digits 0 and 1.",
      "To represent each decimal digit with its equivalent four-bit binary code.",
      "To perform complex arithmetic operations in hardware.",
      "To compress large binary files."
    ],
    "correct_answer": "To represent each decimal digit with its equivalent four-bit binary code.",
    "explanation": "BCD is a system for encoding decimal numbers, where each decimal digit is represented by its own four-bit binary code. This simplifies the conversion between decimal and binary for display purposes."
  },
  {
    "question": "What is the role of 'Cache Memory' in a computer system?",
    "options": [
      "To store data permanently for long-term storage.",
      "To provide a small, fast memory that stores frequently accessed data and instructions for quicker retrieval by the CPU.",
      "To serve as the primary storage for the operating system.",
      "To manage external peripheral devices."
    ],
    "correct_answer": "To provide a small, fast memory that stores frequently accessed data and instructions for quicker retrieval by the CPU.",
    "explanation": "Cache memory is a high-speed memory that sits between the CPU and main memory (RAM). Its purpose is to store copies of data and instructions that the CPU is most likely to need next, significantly speeding up data access."
  },
  {
    "question": "What are 'System Libraries' in the context of Linux?",
    "options": [
      "Collections of user-written scripts.",
      "Pre-compiled collections of code that provide common functions and services to applications.",
      "Hardware components that extend system capabilities.",
      "Configuration files for the kernel."
    ],
    "correct_answer": "Pre-compiled collections of code that provide common functions and services to applications.",
    "explanation": "System libraries are collections of pre-written code routines that applications can use to perform common tasks, such as interacting with the operating system, performing mathematical calculations, or handling network communications."
  },
  {
    "question": "What is 'Asynchronous data transfer' characterized by?",
    "options": [
      "A shared clock signal between sender and receiver.",
      "The absence of a common clock signal, relying on control signals for coordination.",
      "Data transmission at fixed, predetermined intervals.",
      "Simultaneous transmission and reception of data."
    ],
    "correct_answer": "The absence of a common clock signal, relying on control signals for coordination.",
    "explanation": "Asynchronous data transfer does not require a synchronized clock between the sender and receiver. Instead, it uses handshaking signals to coordinate data exchange, ensuring data integrity even with varying speeds between devices."
  },
  {
    "question": "What is the main function of the 'Boot Loader' in Linux?",
    "options": [
      "To manage network connections after the system boots.",
      "To load the Linux kernel into memory and start the operating system.",
      "To provide a graphical interface for user interaction.",
      "To install new software packages."
    ],
    "correct_answer": "To load the Linux kernel into memory and start the operating system.",
    "explanation": "The boot loader is a small program that runs when the computer starts up. Its primary role is to load the operating system (in this case, the Linux kernel) into RAM and pass control to it."
  },
  {
    "question": "Which of the following is true about 'Hard Links' in Linux?",
    "options": [
      "They can link across different file systems.",
      "They are separate files that contain the path to the original file.",
      "They are direct pointers to the inode of a file, sharing the same data.",
      "They are automatically deleted if the original file is moved."
    ],
    "correct_answer": "They are direct pointers to the inode of a file, sharing the same data.",
    "explanation": "A hard link creates another name for an existing file. Both the original file name and the hard link point to the same inode (data block) on the disk. This means they refer to the exact same data. They cannot span file systems."
  },
  {
    "question": "What is 'Pipeline Processing' in computer architecture?",
    "options": [
      "A technique to store data in a sequential manner.",
      "A technique that allows multiple instructions to be processed in parallel by overlapping their execution stages.",
      "A method for connecting multiple CPUs together.",
      "A strategy for managing external memory devices."
    ],
    "correct_answer": "A technique that allows multiple instructions to be processed in parallel by overlapping their execution stages.",
    "explanation": "Pipeline processing is a technique used in modern CPUs where multiple instructions are fetched, decoded, and executed simultaneously in different stages of a pipeline, improving instruction throughput."
  },
  {
    "question": "What are 'Instruction Formats' in computer architecture?",
    "options": [
      "The way instructions are stored in memory.",
      "The structure and layout of bits within an instruction word, defining the opcode, operand fields, and addressing modes.",
      "The sequence of operations performed by the CPU.",
      "The method for translating high-level programming languages into machine code."
    ],
    "correct_answer": "The structure and layout of bits within an instruction word, defining the opcode, operand fields, and addressing modes.",
    "explanation": "Instruction format refers to the way an instruction is encoded in binary. It typically specifies the opcode (what operation to perform) and the operand(s) (on what data the operation is to be performed), along with information about addressing modes."
  },
  {
    "question": "What is the primary role of the 'Kernel' in a Linux operating system?",
    "options": [
      "To manage user applications.",
      "To provide a graphical user interface.",
      "To act as the core of the operating system, managing system resources and mediating access to hardware.",
      "To process user commands from the shell."
    ],
    "correct_answer": "To act as the core of the operating system, managing system resources and mediating access to hardware.",
    "explanation": "The Kernel is the fundamental part of the operating system. It handles core functionalities such as process management, memory management, device management, and system calls, essentially acting as the bridge between hardware and software."
  },
  {
    "question": "Which command in Linux is used to display the end of a file?",
    "options": [
      "head",
      "cat",
      "more",
      "tail"
    ],
    "correct_answer": "tail",
    "explanation": "The `tail` command is used to display the last few lines (the 'tail') of a file. It's often used to monitor log files in real-time."
  },
  {
    "question": "What is 'Memory Interleaving'?",
    "options": [
      "A technique to divide memory into logical segments.",
      "A technique to improve memory access speed by dividing memory into banks and allowing parallel access to different banks.",
      "A method for combining multiple memory chips into a single module.",
      "A process of swapping data between main memory and virtual memory."
    ],
    "correct_answer": "A technique to improve memory access speed by dividing memory into banks and allowing parallel access to different banks.",
    "explanation": "Memory interleaving is a technique that arranges memory so that contiguous memory locations are in different memory banks. This allows the CPU or DMA controller to access multiple memory locations simultaneously or in quick succession, improving overall memory bandwidth."
  },
  {
    "question": "Which of the following is true about 'Microprogrammed Control Unit'?",
    "options": [
      "It uses hardwired logic for instruction execution.",
      "It uses a special memory (control memory) to store microinstructions that define the control signals for each instruction.",
      "It is faster and more flexible than hardwired control units.",
      "It is primarily used in RISC architectures."
    ],
    "correct_answer": "It uses a special memory (control memory) to store microinstructions that define the control signals for each instruction.",
    "explanation": "A microprogrammed control unit uses a control memory to store a sequence of microinstructions. Each microinstruction contains control signals that directly manipulate the data path components to execute a specific step of an instruction. This approach offers flexibility and ease of modification."
  },
  {
    "question": "What is the function of the 'curl' command in Linux?",
    "options": [
      "To create compressed archives.",
      "To download or upload data using various network protocols.",
      "To search for files on the local file system.",
      "To change the working directory."
    ],
    "correct_answer": "To download or upload data using various network protocols.",
    "explanation": "The `curl` command is a versatile command-line tool for transferring data with URLs. It supports a wide range of protocols, including HTTP, HTTPS, FTP, and more, making it useful for downloading files or interacting with web services."
  },
  {
    "question": "What is 'Thrashing' in an operating system?",
    "options": [
      "A condition where a process spends most of its time executing instructions.",
      "A condition where the system spends most of its time swapping pages between main memory and disk, resulting in very little useful work being done.",
      "A type of denial-of-service attack.",
      "A process of rapidly allocating and deallocating memory."
    ],
    "correct_answer": "A condition where the system spends most of its time swapping pages between main memory and disk, resulting in very little useful work being done.",
    "explanation": "Thrashing occurs when the operating system spends an excessive amount of time swapping pages in and out of main memory (due to a high rate of page faults), leading to a significant degradation in system performance as the CPU is underutilized."
  },
  {
    "question": "What is the primary role of the 'Program Counter' in a CPU's execution cycle?",
    "options": [
      "To store the data being processed.",
      "To hold the address of the next instruction to be fetched.",
      "To store the current instruction's opcode.",
      "To manage interrupt requests."
    ],
    "correct_answer": "To hold the address of the next instruction to be fetched.",
    "explanation": "The Program Counter (PC) holds the memory address of the instruction that is to be executed next. It is automatically incremented after each instruction fetch, unless a jump, branch, or call instruction modifies its value."
  },
  {
    "question": "What is the difference between 'User Mode' and 'Kernel Mode' in an operating system?",
    "options": [
      "User mode has full access to hardware, while kernel mode is restricted.",
      "Kernel mode is for application programs, while user mode is for the operating system.",
      "Kernel mode provides privileged access to system resources and hardware, while user mode is restricted to prevent direct access and ensure system stability.",
      "There is no difference; they are interchangeable terms."
    ],
    "correct_answer": "Kernel mode provides privileged access to system resources and hardware, while user mode is restricted to prevent direct access and ensure system stability.",
    "explanation": "User mode is a restricted execution mode where applications run, preventing them from directly accessing sensitive hardware or system data. Kernel mode (or supervisor mode) is a privileged mode where the operating system kernel runs, having full access to all hardware and system resources."
  }
];

}

export function SetD(){
return [
  {
    "question": "What is the primary role of the '/home' directory in a Linux file system?",
    "options": [
      "To store system configuration files.",
      "To contain essential system binaries.",
      "To hold user-specific files and directories (user's personal data).",
      "To store temporary files."
    ],
    "correct_answer": "To hold user-specific files and directories (user's personal data).",
    "explanation": "The `/home` directory is where individual user directories are typically located. Each user has a subdirectory within `/home` to store their personal files, documents, and configurations."
  },
  {
    "question": "What is the purpose of the 'sleep' system call?",
    "options": [
      "To terminate a process immediately.",
      "To put the calling process to rest (pause execution) for a specified period of time.",
      "To change the priority of a process.",
      "To send a signal to another process."
    ],
    "correct_answer": "To put the calling process to rest (pause execution) for a specified period of time.",
    "explanation": "The `sleep` system call causes the current process to pause execution for a specified number of seconds or microseconds. This is useful for delaying actions or for simple timing in scripts."
  },
  {
    "question": "What is 'Segmentation' as a memory management technique?",
    "options": [
      "Dividing physical memory into fixed-size blocks called pages.",
      "Dividing a program into logical blocks of variable size, called segments, based on the program's structure.",
      "Dividing the hard disk into multiple partitions.",
      "The process of creating multiple threads within a single process."
    ],
    "correct_answer": "Dividing a program into logical blocks of variable size, called segments, based on the program's structure.",
    "explanation": "Segmentation is a memory management scheme that views memory as a collection of variable-sized segments, where each segment corresponds to a logical unit of the program (e.g., code, data, stack)."
  },
  {
    "question": "What is the primary advantage of 'Memory-Mapped I/O' over 'Isolated I/O'?",
    "options": [
      "It requires special I/O instructions, making it more secure.",
      "It allows the CPU to use the same instructions for I/O operations as for memory access, simplifying programming.",
      "It offers a separate address space for I/O devices, preventing conflicts with memory addresses.",
      "It is generally slower than isolated I/O."
    ],
    "correct_answer": "It allows the CPU to use the same instructions for I/O operations as for memory access, simplifying programming.",
    "explanation": "In memory-mapped I/O, I/O devices are treated as memory locations, so standard memory load/store instructions can be used to communicate with them, simplifying the instruction set and programming."
  },
  {
    "question": "What is the function of the 'Less' command in Linux?",
    "options": [
      "To display the contents of a file in reverse order.",
      "To display file contents page by page, with the ability to scroll forward and backward.",
      "To count the number of lines in a file.",
      "To compare two files line by line."
    ],
    "correct_answer": "To display file contents page by page, with the ability to scroll forward and backward.",
    "explanation": "The `less` command is a file viewer that allows you to view the content of a text file one screenful at a time, but unlike `more`, it also allows backward scrolling and has more navigation options."
  },
  {
    "question": "What are 'File Permissions' in Linux?",
    "options": [
      "The names given to files and directories.",
      "Attributes that control who can read, write, or execute a file or directory.",
      "The physical location of a file on the hard disk.",
      "The date and time a file was last modified."
    ],
    "correct_answer": "Attributes that control who can read, write, or execute a file or directory.",
    "explanation": "Linux file permissions determine which users (owner, group, others) have `read` (r), `write` (w), and `execute` (x) access to a file or directory, playing a crucial role in system security."
  },
  {
    "question": "What is the purpose of 'Microprogramming' in CPU control unit design?",
    "options": [
      "To use hardwired logic for faster instruction execution.",
      "To implement the control logic using a sequence of microinstructions stored in a control memory, offering flexibility and easier design.",
      "To directly execute machine code without any intermediate steps.",
      "To design simpler and smaller instruction sets."
    ],
    "correct_answer": "To implement the control logic using a sequence of microinstructions stored in a control memory, offering flexibility and easier design.",
    "explanation": "Microprogramming is a method of implementing the control unit of a CPU. It uses microcode (sequences of microinstructions) stored in a special control memory to define the operations of the CPU for each instruction, making it flexible and relatively easier to modify or extend the instruction set."
  },
  {
    "question": "Which of the following is an example of an 'Open Source Software'?",
    "options": [
      "Microsoft Windows",
      "Adobe Photoshop",
      "Linux operating system",
      "Apple macOS"
    ],
    "correct_answer": "Linux operating system",
    "explanation": "Linux is a prime example of open-source software, meaning its source code is freely available for anyone to use, modify, and distribute. The other options are proprietary software."
  },
  {
    "question": "What is the primary function of the 'fork' system call?",
    "options": [
      "To create a new file.",
      "To terminate the current process.",
      "To create a new process (child process) that is a duplicate of the calling process (parent process).",
      "To change the current working directory."
    ],
    "correct_answer": "To create a new process (child process) that is a duplicate of the calling process (parent process).",
    "explanation": "The `fork` system call is used to create a new process. The new process (child) is an almost exact copy of the calling process (parent) and typically continues execution from the point of the `fork` call."
  },
  {
    "question": "What is the main role of the 'BIOS' (Basic Input/Output System) during computer startup?",
    "options": [
      "To load the operating system into memory.",
      "To perform initial hardware checks (POST) and initialize system components before loading the OS.",
      "To manage application programs.",
      "To provide a graphical user interface."
    ],
    "correct_answer": "To perform initial hardware checks (POST) and initialize system components before loading the OS.",
    "explanation": "The BIOS is firmware that resides on a chip on the motherboard. Its primary role during startup is to perform a Power-On Self-Test (POST) to ensure hardware is working correctly and then to initialize system components and locate a boot device to load the operating system."
  },
  {
    "question": "What is the significance of the 'Sticky Bit' permission in Linux directories?",
    "options": [
      "It makes the directory immutable (cannot be deleted).",
      "It prevents users from deleting or renaming files in the directory unless they own the file or the directory itself.",
      "It allows anyone to write to the directory but prevents listing its contents.",
      "It ensures that all new files created in the directory inherit the group ownership of the directory."
    ],
    "correct_answer": "It prevents users from deleting or renaming files in the directory unless they own the file or the directory itself.",
    "explanation": "When the sticky bit is set on a directory, files within that directory can only be deleted or renamed by the file's owner, the directory's owner, or the root user. This is commonly used in shared directories like `/tmp`."
  },
  {
    "question": "What is the key difference between 'Absolute Path' and 'Relative Path' in Linux?",
    "options": [
      "Absolute paths are used for directories, while relative paths are for files.",
      "Absolute paths start from the root directory (/), while relative paths start from the current working directory.",
      "Relative paths are always shorter than absolute paths.",
      "Absolute paths can only be used by the root user."
    ],
    "correct_answer": "Absolute paths start from the root directory (/), while relative paths start from the current working directory.",
    "explanation": "An absolute path specifies the exact location of a file or directory starting from the root directory (`/`). A relative path specifies the location relative to the current working directory."
  },
  {
    "question": "What is the role of 'Device Drivers' in an operating system?",
    "options": [
      "To develop new software applications.",
      "To provide the operating system with the necessary instructions to communicate with specific hardware devices.",
      "To manage network connections.",
      "To compress and decompress files."
    ],
    "correct_answer": "To provide the operating system with the necessary instructions to communicate with specific hardware devices.",
    "explanation": "Device drivers are software components that act as an interface between the operating system and hardware devices. They translate commands from the OS into instructions that the specific hardware device can understand and execute."
  },
  {
    "question": "What is 'Bus Arbitration' in computer systems?",
    "options": [
      "The process of selecting which data line to use on a bus.",
      "The mechanism for resolving conflicts when multiple devices attempt to gain control of the system bus simultaneously.",
      "The process of transferring data over a bus.",
      "The method for designing new bus architectures."
    ],
    "correct_answer": "The mechanism for resolving conflicts when multiple devices attempt to gain control of the system bus simultaneously.",
    "explanation": "Bus arbitration is necessary when multiple components (like the CPU, DMA controllers, and other I/O devices) want to use the shared system bus. It ensures that only one device has control of the bus at a time to prevent data corruption."
  },
  {
    "question": "Which of the following is a common method for 'Parallel Interrupt' handling?",
    "options": [
      "Daisy chaining.",
      "Polling.",
      "Using a single interrupt line for all devices.",
      "Prioritizing interrupts based on their arrival time."
    ],
    "correct_answer": "Daisy chaining.",
    "explanation": "Daisy chaining is a common method for handling parallel interrupts. Devices are connected in a series, and the interrupt signal propagates through the chain, allowing higher-priority devices to be serviced first."
  },
  {
    "question": "What is the purpose of 'Two-Factor Authentication (2FA)' in system security?",
    "options": [
      "To require users to provide two different passwords for login.",
      "To add an extra layer of security by requiring two different forms of identification before granting access.",
      "To encrypt all user data on the system.",
      "To allow multiple users to log in simultaneously."
    ],
    "correct_answer": "To add an extra layer of security by requiring two different forms of identification before granting access.",
    "explanation": "Two-Factor Authentication (2FA) enhances security by requiring users to provide two distinct forms of verification (e.g., something they know like a password, and something they have like a phone or token) to gain access."
  },
  {
    "question": "What is 'Clock Rate' in the context of CPU performance?",
    "options": [
      "The amount of data processed per second.",
      "The number of instructions a CPU can execute per clock cycle.",
      "The frequency at which the CPU's internal clock operates, typically measured in Hertz (Hz).",
      "The time it takes for data to travel from memory to the CPU."
    ],
    "correct_answer": "The frequency at which the CPU's internal clock operates, typically measured in Hertz (Hz).",
    "explanation": "The clock rate (or clock speed) of a CPU indicates how many cycles per second the CPU's internal clock generates. A higher clock rate generally means more operations can be performed per second."
  },
  {
    "question": "What is the significance of the 'execute' permission for a directory in Linux?",
    "options": [
      "Allows listing the contents of the directory.",
      "Allows creating and deleting files within the directory.",
      "Allows entering the directory and accessing its subdirectories and files (if read permission is also granted).",
      "Allows changing the ownership of the directory."
    ],
    "correct_answer": "Allows entering the directory and accessing its subdirectories and files (if read permission is also granted).",
    "explanation": "For a directory, the 'execute' permission (x) allows users to `cd` into the directory, access its contents, and perform operations on files within it (assuming other permissions allow)."
  },
  {
    "question": "What is 'Cache Coherence' in multiprocessor systems?",
    "options": [
      "Ensuring that all processors have their own independent cache memory.",
      "Maintaining consistent data across multiple caches in a multiprocessor system when shared data is modified.",
      "A technique for reducing the size of cache memory.",
      "A method for speeding up cache access time."
    ],
    "correct_answer": "Maintaining consistent data across multiple caches in a multiprocessor system when shared data is modified.",
    "explanation": "Cache coherence refers to the problem of ensuring that changes to data in one cache are reflected in other caches and main memory, maintaining data consistency across multiple processors in a shared-memory system."
  },
  {
    "question": "What is the function of the 'ls -R' command in Linux?",
    "options": [
      "To list files in reverse alphabetical order.",
      "To list directory contents recursively (including subdirectories).",
      "To list files that are writable by everyone.",
      "To list files that have been recently modified."
    ],
    "correct_answer": "To list directory contents recursively (including subdirectories).",
    "explanation": "The `ls -R` command lists the contents of the specified directory and all its subdirectories recursively, providing a comprehensive view of the file system structure."
  },
  {
    "question": "What are 'Instruction Set Architectures (ISA)'?",
    "options": [
      "The physical layout of the CPU components.",
      "The part of the computer architecture that defines how the CPU interacts with memory.",
      "The abstract model of a computer that defines how software controls the CPU, including its instruction set, registers, and memory model.",
      "The software used to compile programs."
    ],
    "correct_answer": "The abstract model of a computer that defines how software controls the CPU, including its instruction set, registers, and memory model.",
    "explanation": "An Instruction Set Architecture (ISA) is an abstract model that describes how a computer functions at the machine language level. It defines the set of instructions that a CPU can understand and execute, along with the data types, registers, and memory addressing modes."
  },
  {
    "question": "What is the primary purpose of 'Time-Sharing Operating Systems'?",
    "options": [
      "To allow only one user to interact with the system at a time.",
      "To allow multiple users to share a single computer system by rapidly switching between their processes.",
      "To run a single program very efficiently.",
      "To manage real-time critical applications with strict deadlines."
    ],
    "correct_answer": "To allow multiple users to share a single computer system by rapidly switching between their processes.",
    "explanation": "Time-sharing operating systems enable multiple users to run programs concurrently on a single computer. The CPU's time is divided among processes, giving each user the illusion of having dedicated access to the system."
  },
  {
    "question": "What is 'Dirty Bit' in page tables?",
    "options": [
      "A bit indicating if a page is currently loaded in memory.",
      "A bit that indicates if a page in memory has been modified since it was loaded from disk, requiring it to be written back to disk before replacement.",
      "A bit used for error checking during data transfer.",
      "A bit that marks a page as read-only."
    ],
    "correct_answer": "A bit that indicates if a page in memory has been modified since it was loaded from disk, requiring it to be written back to disk before replacement.",
    "explanation": "The dirty bit (or modify bit) in a page table entry indicates whether the corresponding page in main memory has been modified. If it's dirty, the page must be written back to secondary storage before it can be replaced, to ensure data integrity."
  },
  {
    "question": "What is the function of the 'chown' command in Linux?",
    "options": [
      "To change the permissions of a file.",
      "To change the owner of a file or directory.",
      "To create new files.",
      "To copy files from one location to another."
    ],
    "correct_answer": "To change the owner of a file or directory.",
    "explanation": "The `chown` (change owner) command is used to change the user and/or group ownership of files or directories."
  },
  {
    "question": "What is the 'Effective Address' in computer architecture?",
    "options": [
      "The address directly specified in the instruction's address field.",
      "The final calculated memory address where the operand or instruction is actually located.",
      "The address of the next instruction to be executed.",
      "The address of a register holding the operand."
    ],
    "correct_answer": "The final calculated memory address where the operand or instruction is actually located.",
    "explanation": "The effective address is the actual memory address that the CPU uses to access data or instructions after all addressing mode calculations (e.g., adding base registers, index registers, displacements) have been performed."
  },
  {
    "question": "What is a 'Transistor' in digital electronics?",
    "options": [
      "A device for storing electrical energy.",
      "A passive electronic component that resists current flow.",
      "A semiconductor device used to amplify or switch electronic signals and electrical power, forming the basis of logic gates.",
      "A component that emits light when current passes through it."
    ],
    "correct_answer": "A semiconductor device used to amplify or switch electronic signals and electrical power, forming the basis of logic gates.",
    "explanation": "Transistors are fundamental components of modern electronic devices, acting as miniature switches or amplifiers. They are the building blocks of integrated circuits, including microprocessors and memory chips, enabling the creation of logic gates."
  },
  {
    "question": "What is the purpose of the 'Control Unit' within the CPU?",
    "options": [
      "To perform arithmetic and logical operations.",
      "To store program instructions and data.",
      "To direct and coordinate the entire computer system by fetching, decoding, and executing instructions.",
      "To manage input and output devices."
    ],
    "correct_answer": "To direct and coordinate the entire computer system by fetching, decoding, and executing instructions.",
    "explanation": "The Control Unit (CU) is a component of the CPU that directs the operation of the processor. It interprets instructions and generates control signals to coordinate the activities of other CPU components and system resources to execute instructions."
  },
  {
    "question": "What is the primary characteristic of 'Multiprogramming Operating Systems'?",
    "options": [
      "They allow only one program to run at a time.",
      "They allow multiple programs to reside in memory simultaneously, sharing the CPU to maximize its utilization.",
      "They are designed exclusively for real-time applications.",
      "They distribute tasks across multiple networked computers."
    ],
    "correct_answer": "They allow multiple programs to reside in memory simultaneously, sharing the CPU to maximize its utilization.",
    "explanation": "Multiprogramming increases CPU utilization by keeping multiple jobs in memory at once. When one job needs to wait (e.g., for I/O), the CPU switches to another job, preventing the CPU from idling."
  },
  {
    "question": "What is the significance of the 'S-R Flip Flop'?",
    "options": [
      "It is a complex sequential circuit used for high-speed data processing.",
      "It is a basic memory element that can store one bit of information, with set and reset inputs.",
      "It is a type of analog-to-digital converter.",
      "It is used for amplifying electrical signals."
    ],
    "correct_answer": "It is a basic memory element that can store one bit of information, with set and reset inputs.",
    "explanation": "An S-R (Set-Reset) flip-flop is a fundamental sequential circuit that can store a single binary digit (bit). It has two inputs, Set (S) and Reset (R), which control its output state (Q and Q')."
  },
  {
    "question": "What is the 'Arithmetic Logic Unit (ALU)' responsible for in a CPU?",
    "options": [
      "Storing program instructions.",
      "Performing all arithmetic (addition, subtraction, etc.) and logical (AND, OR, NOT) operations.",
      "Controlling the flow of data within the computer.",
      "Managing input/output devices."
    ],
    "correct_answer": "Performing all arithmetic (addition, subtraction, etc.) and logical (AND, OR, NOT) operations.",
    "explanation": "The ALU is a digital circuit within the CPU that performs arithmetic operations (like addition, subtraction, multiplication, division) and logical operations (like AND, OR, NOT, XOR)."
  },
  {
    "question": "What is the purpose of 'Bootstrapping' a computer?",
    "options": [
      "The process of shutting down the computer gracefully.",
      "The initial process of starting a computer system, where a small program loads the operating system.",
      "The act of connecting to a network.",
      "The process of installing new software applications."
    ],
    "correct_answer": "The initial process of starting a computer system, where a small program loads the operating system.",
    "explanation": "Bootstrapping (or booting) refers to the self-starting process that loads the operating system when a computer is turned on. A small boot program (often in ROM) loads the larger OS into RAM."
  },
  {
    "question": "What is 'Memory Protection' in operating systems?",
    "options": [
      "Protecting memory from physical damage.",
      "A mechanism to prevent a process from accessing memory that has not been allocated to it, or from interfering with other processes' memory.",
      "Encrypting all data stored in memory.",
      "A technique for backing up memory contents."
    ],
    "correct_answer": "A mechanism to prevent a process from accessing memory that has not been allocated to it, or from interfering with other processes' memory.",
    "explanation": "Memory protection is a key feature of operating systems that prevents a process from accessing memory that belongs to another process or the operating system itself, ensuring system stability and security."
  },
  {
    "question": "What is the significance of the '/proc' file system in Linux?",
    "options": [
      "It stores permanent user data.",
      "It contains virtual files that provide information about running processes and kernel parameters.",
      "It holds device drivers.",
      "It is used for temporary storage during system operations."
    ],
    "correct_answer": "It contains virtual files that provide information about running processes and kernel parameters.",
    "explanation": "The `/proc` filesystem is a pseudo-filesystem that provides an interface to kernel data structures. It contains 'files' (which are actually dynamic views of kernel data) that provide information about processes, CPU, memory, and other system parameters."
  },
  {
    "question": "What is 'External Fragmentation' in memory management?",
    "options": [
      "Unused memory within an allocated block.",
      "Total allocated memory minus the actual memory used by processes.",
      "Free memory that is broken into small, non-contiguous blocks, making it difficult to allocate large contiguous blocks.",
      "Fragmentation that occurs on the hard disk, not in RAM."
    ],
    "correct_answer": "Free memory that is broken into small, non-contiguous blocks, making it difficult to allocate large contiguous blocks.",
    "explanation": "External fragmentation occurs when there is enough total free memory to satisfy a request, but the free memory is scattered in small, non-contiguous blocks, preventing the allocation of a single large block."
  },
  {
    "question": "What is 'Internal Fragmentation' in memory management?",
    "options": [
      "Free memory that is broken into small, non-contiguous blocks.",
      "Memory that is allocated to a process but is not actually used by that process (e.g., due to fixed-size blocks being larger than the actual need).",
      "Fragmentation caused by disk I/O operations.",
      "Fragmentation within the CPU cache."
    ],
    "correct_answer": "Memory that is allocated to a process but is not actually used by that process (e.g., due to fixed-size blocks being larger than the actual need).",
    "explanation": "Internal fragmentation occurs when a memory allocation scheme allocates more memory than a process actually needs. The unused portion within the allocated block remains unused, leading to wasted space."
  },
  {
    "question": "What is the 'Truth Table' for a logic gate?",
    "options": [
      "A diagram showing the physical layout of the gate.",
      "A table that lists all possible input combinations for a logic gate and the corresponding output for each combination.",
      "A list of all possible logic gates.",
      "A table showing the propagation delay of a gate."
    ],
    "correct_answer": "A table that lists all possible input combinations for a logic gate and the corresponding output for each combination.",
    "explanation": "A truth table is a mathematical table used in logic to compute the functional values of logical expressions. It lists all possible combinations of input values for a logical function (or gate) and the output value for each combination."
  },
  {
    "question": "What is 'Direct Addressing Mode'?",
    "options": [
      "The instruction contains the actual data (operand) directly.",
      "The instruction contains the address of the register that holds the operand.",
      "The instruction contains the effective address of the operand in memory.",
      "The instruction contains an address which, when used, points to another address that holds the operand."
    ],
    "correct_answer": "The instruction contains the effective address of the operand in memory.",
    "explanation": "In direct addressing mode, the address field in the instruction directly specifies the effective address of the operand in memory."
  },
  {
    "question": "What is the main purpose of 'Virtual Memory'?",
    "options": [
      "To speed up CPU processing.",
      "To allow programs larger than physical memory to run, by using disk space as an extension of RAM.",
      "To provide a permanent storage for all data.",
      "To improve network communication speed."
    ],
    "correct_answer": "To allow programs larger than physical memory to run, by using disk space as an extension of RAM.",
    "explanation": "Virtual memory is a memory management technique that enables an operating system to compensate for physical memory shortages by temporarily transferring data from random access memory (RAM) to disk storage."
  },
  {
    "question": "What is the 'Bus' in computer architecture?",
    "options": [
      "A software program that controls data flow.",
      "A common pathway or collection of wires used to transfer data, address, and control signals between components in a computer system.",
      "A type of memory used for temporary storage.",
      "A device for inputting data into the computer."
    ],
    "correct_answer": "A common pathway or collection of wires used to transfer data, address, and control signals between components in a computer system.",
    "explanation": "A bus is a communication system that transfers data between components inside a computer, or between computers. It is a shared communication pathway."
  },
  {
    "question": "Which of the following is a key feature of 'Real-Time Operating Systems' (RTOS)?",
    "options": [
      "They prioritize user experience and graphical interfaces.",
      "They guarantee that tasks are completed within strict time deadlines.",
      "They are designed for general-purpose computing and desktop environments.",
      "They focus on maximizing CPU throughput regardless of task completion times."
    ],
    "correct_answer": "They guarantee that tasks are completed within strict time deadlines.",
    "explanation": "Real-time operating systems are designed to process data and events with strict time constraints. Their primary characteristic is their ability to guarantee a response within a specified time limit, crucial for applications like industrial control or medical devices."
  },
  {
    "question": "What is 'Demand Paging'?",
    "options": [
      "A paging technique where all pages of a process are loaded into memory at once.",
      "A paging technique where pages are loaded into main memory only when they are needed (demanded) by the CPU.",
      "A method for pre-loading pages into cache memory.",
      "A technique for optimizing disk access speeds."
    ],
    "correct_answer": "A paging technique where pages are loaded into main memory only when they are needed (demanded) by the CPU.",
    "explanation": "Demand paging is a virtual memory technique where the operating system only loads a page into main memory when it is actually accessed by the CPU (i.e., a page fault occurs for that page)."
  },
  {
    "question": "What is 'Spooling' in operating systems?",
    "options": [
      "A technique for compressing data before storage.",
      "A process where data is temporarily held in a buffer (spool) for a device that is slower than the process generating the data (e.g., printing).",
      "A method for creating a new process.",
      "A technique for memory deallocation."
    ],
    "correct_answer": "A process where data is temporarily held in a buffer (spool) for a device that is slower than the process generating the data (e.g., printing).",
    "explanation": "Spooling (Simultaneous Peripheral Operations On-Line) is a technique for buffering data for various devices, such as printers, where data is sent to a temporary holding area (spool) and processed by the device at its own pace, freeing up the CPU."
  }
];

}

export function SetE(){
return[
  {
    "question": "What is the function of the 'wc' command in Linux?",
    "options": [
      "To count the number of characters in a file.",
      "To count the number of words, lines, and bytes in files.",
      "To count the number of directories in a given path.",
      "To count the number of processes running on the system."
    ],
    "correct_answer": "To count the number of words, lines, and bytes in files.",
    "explanation": "The `wc` command (word count) is used to count the number of lines, words, and characters (or bytes) in text files or standard input."
  },
  {
    "question": "What is the primary characteristic of 'Multitasking Operating Systems'?",
    "options": [
      "They allow only one program to run at a time.",
      "They enable a single CPU to appear to run multiple tasks or programs concurrently by rapidly switching between them.",
      "They are designed exclusively for real-time applications.",
      "They require multiple CPUs to function."
    ],
    "correct_answer": "They enable a single CPU to appear to run multiple tasks or programs concurrently by rapidly switching between them.",
    "explanation": "Multitasking operating systems provide the capability for a user to run multiple applications or tasks seemingly at the same time on a single processor by rapidly context-switching between them."
  },
  {
    "question": "What is the main purpose of 'Disk Formatting'?",
    "options": [
      "To create physical partitions on a hard drive.",
      "To prepare a storage device (like a hard disk or USB drive) for initial use by establishing a file system structure.",
      "To optimize the speed of data transfer to and from the disk.",
      "To repair bad sectors on a disk."
    ],
    "correct_answer": "To prepare a storage device (like a hard disk or USB drive) for initial use by establishing a file system structure.",
    "explanation": "Disk formatting is the process of preparing a data storage device for initial use. It typically involves dividing the disk into partitions and creating a file system on those partitions, which allows the operating system to store and retrieve files."
  },
  {
    "question": "How do 'Programmed I/O' operations typically work?",
    "options": [
      "The I/O device directly transfers data to memory without CPU intervention.",
      "The CPU continuously checks the status of the I/O device until it is ready for data transfer.",
      "The I/O device sends an interrupt to the CPU when it's ready.",
      "Data is transferred in fixed blocks using a dedicated controller."
    ],
    "correct_answer": "The CPU continuously checks the status of the I/O device until it is ready for data transfer.",
    "explanation": "In programmed I/O, the CPU is entirely responsible for controlling the I/O operations. It initiates a data transfer and then continuously polls (checks) the status of the I/O module until the operation is complete. This method wastes CPU cycles in waiting."
  },
  {
    "question": "What is the 'root account' in Linux?",
    "options": [
      "A standard user account with limited privileges.",
      "A special user account with superuser privileges, having full control over the system.",
      "An account exclusively for network administrators.",
      "An account used only for system logging."
    ],
    "correct_answer": "A special user account with superuser privileges, having full control over the system.",
    "explanation": "The root account in Linux (often referred to as the 'superuser') has the highest level of privileges and can perform any operation on the system, including modifying system files, installing software, and managing other user accounts."
  },
  {
    "question": "What is the difference between 'UNIX' and 'Windows' based operating systems in terms of philosophy?",
    "options": [
      "UNIX is proprietary, Windows is open-source.",
      "UNIX is command-line centric and modular, Windows is more GUI-centric and integrated.",
      "UNIX is designed for single-user systems, Windows for multi-user systems.",
      "UNIX supports only Intel processors, Windows supports all."
    ],
    "correct_answer": "UNIX is command-line centric and modular, Windows is more GUI-centric and integrated.",
    "explanation": "UNIX-like systems (including Linux) emphasize a command-line interface, modular design (small tools doing one thing well), and a powerful file system. Windows focuses on a graphical user interface and an integrated ecosystem of applications and services."
  },
  {
    "question": "What is the 'Time Slice' or 'Quantum' in CPU scheduling?",
    "options": [
      "The total time a process runs before completion.",
      "The maximum time a process is allowed to run before being preempted by the scheduler to give other processes a chance.",
      "The time it takes for a context switch to occur.",
      "The time interval between two consecutive interrupts."
    ],
    "correct_answer": "The maximum time a process is allowed to run before being preempted by the scheduler to give other processes a chance.",
    "explanation": "In time-sharing and round-robin scheduling, the time slice (or quantum) is a small unit of time that the CPU scheduler allocates to each process. After this time expires, the process is preempted, and another process gets the CPU."
  },
  {
    "question": "What is a 'Page Fault' in virtual memory?",
    "options": [
      "An error caused by incorrect memory allocation.",
      "An event that occurs when a program tries to access a page of memory that is currently not in main memory but is in virtual memory (on disk).",
      "A hardware error indicating a faulty memory chip.",
      "A security breach in memory access."
    ],
    "correct_answer": "An event that occurs when a program tries to access a page of memory that is currently not in main memory but is in virtual memory (on disk).",
    "explanation": "A page fault is an interrupt that occurs when a program attempts to access a memory page that is logically mapped into its address space but is not physically present in RAM. The OS then retrieves the page from disk."
  },
  {
    "question": "What is the primary function of the 'cd' command in Linux?",
    "options": [
      "To copy files.",
      "To create directories.",
      "To change the current working directory.",
      "To delete files."
    ],
    "correct_answer": "To change the current working directory.",
    "explanation": "The `cd` command (change directory) is used to navigate the file system hierarchy, allowing the user to move from one directory to another."
  },
  {
    "question": "What does 'Volatile Memory' mean?",
    "options": [
      "Memory that retains its data even when power is removed.",
      "Memory that loses its contents when power is removed.",
      "Memory that can only be read, not written to.",
      "Memory that is slower than non-volatile memory."
    ],
    "correct_answer": "Memory that loses its contents when power is removed.",
    "explanation": "Volatile memory requires power to maintain the stored information. Most RAM used in computers is volatile memory (e.g., DRAM). When the computer is turned off, the contents of volatile memory are lost."
  },
  {
    "question": "What is the difference between a 'Command Interpreter' and a 'Shell' in UNIX?",
    "options": [
      "A command interpreter is a graphical interface, while a shell is text-based.",
      "A command interpreter is a program that reads and executes commands; a shell is a specific type of command interpreter commonly used in Unix-like systems.",
      "There is no difference; they are interchangeable terms.",
      "A command interpreter only processes shell scripts, while a shell executes commands directly."
    ],
    "correct_answer": "A command interpreter is a program that reads and executes commands; a shell is a specific type of command interpreter commonly used in Unix-like systems.",
    "explanation": "A command interpreter is a broader term for any program that reads and executes commands. A shell (like Bash, Zsh) is a specific type of command interpreter widely used in Unix and Linux, providing a command-line interface for user interaction with the operating system."
  },
  {
    "question": "What is 'Buffering' in the context of I/O operations?",
    "options": [
      "A technique for permanently storing data on a disk.",
      "A process of temporarily storing data in a buffer (a designated memory area) while it is being transferred between devices or between an application and a device.",
      "A method for compressing data during transmission.",
      "A type of memory used by the CPU for fast access."
    ],
    "correct_answer": "A process of temporarily storing data in a buffer (a designated memory area) while it is being transferred between devices or between an application and a device.",
    "explanation": "Buffering involves using a temporary storage area (buffer) in memory to hold data during I/O operations. This helps to match the speed differences between the CPU and I/O devices, improving efficiency."
  },
  {
    "question": "What is the main characteristic of 'Batch Operating Systems'?",
    "options": [
      "They allow immediate user interaction.",
      "They process jobs in batches, without direct user interaction, optimizing for throughput.",
      "They are designed for real-time processing with strict deadlines.",
      "They allow multiple users to share resources simultaneously."
    ],
    "correct_answer": "They process jobs in batches, without direct user interaction, optimizing for throughput.",
    "explanation": "Batch operating systems execute jobs in sequences (batches) without requiring user intervention during execution. All necessary data and commands for a job are prepared beforehand, and jobs are processed one after another or grouped together."
  },
  {
    "question": "What is the significance of the 'Interrupt Priority' system?",
    "options": [
      "It determines which process gets the CPU next based on its burst time.",
      "It ensures that critical interrupts (e.g., from hardware failures) are handled before less critical ones, even if they arrive later.",
      "It assigns priorities to user applications based on resource usage.",
      "It dictates the order in which data is transferred between memory and I/O devices."
    ],
    "correct_answer": "It ensures that critical interrupts (e.g., from hardware failures) are handled before less critical ones, even if they arrive later.",
    "explanation": "Interrupt priority systems are used to manage multiple simultaneous interrupts. Higher priority interrupts are given precedence and are serviced before lower priority ones, ensuring that time-critical events are handled promptly."
  },
  {
    "question": "What is the purpose of 'Relative Addressing Mode'?",
    "options": [
      "The operand's address is directly specified in the instruction.",
      "The operand's address is found in a register.",
      "The effective address of the operand is obtained by adding the address part of the instruction to the content of the program counter (PC).",
      "The instruction contains the actual operand value."
    ],
    "correct_answer": "The effective address of the operand is obtained by adding the address part of the instruction to the content of the program counter (PC).",
    "explanation": "In relative addressing mode, the address of the operand is calculated by adding a displacement (offset) specified in the instruction to the current value of the Program Counter (PC). This is useful for writing position-independent code."
  },
  {
    "question": "What is the primary role of the 'Processor Status Register' (PSR) or 'Flags Register'?",
    "options": [
      "To store general-purpose data values.",
      "To hold the address of the next instruction.",
      "To store status bits (flags) that reflect the outcome of arithmetic and logical operations and control CPU behavior.",
      "To store the instruction being executed."
    ],
    "correct_answer": "To store status bits (flags) that reflect the outcome of arithmetic and logical operations and control CPU behavior.",
    "explanation": "The Processor Status Register (PSR), also known as the Flags Register or Status Register, contains a collection of individual bits (flags) that indicate various conditions resulting from CPU operations (e.g., zero result, carry, overflow, sign)."
  },
  {
    "question": "What is a 'File System' in an operating system?",
    "options": [
      "A physical storage device like a hard drive.",
      "A method by which files are named and organized on storage media, and how they are accessed and managed by the operating system.",
      "A database that stores user account information.",
      "A collection of hardware components that interact with files."
    ],
    "correct_answer": "A method by which files are named and organized on storage media, and how they are accessed and managed by the operating system.",
    "explanation": "A file system is a method and data structure that an operating system uses to control how data is stored and retrieved. Without a file system, information placed on a storage medium would be one large block of data with no way to tell where one piece of information stops and the next begins."
  },
  {
    "question": "What is the main function of 'Registers' in a CPU?",
    "options": [
      "To store large amounts of data permanently.",
      "To provide small, high-speed storage locations within the CPU for temporary data, instructions, and addresses during processing.",
      "To manage external I/O devices.",
      "To connect the CPU to main memory."
    ],
    "correct_answer": "To provide small, high-speed storage locations within the CPU for temporary data, instructions, and addresses during processing.",
    "explanation": "Registers are small, very fast storage locations located directly within the CPU. They are used to hold data, instructions, and addresses that the CPU is currently working with, providing immediate access for operations."
  },
  {
    "question": "What is 'Memory Compaction' (or Defragmentation)?",
    "options": [
      "A method for compressing data in memory.",
      "A technique used in memory management to combine small, non-contiguous free memory blocks into a single large block to alleviate external fragmentation.",
      "A process of creating multiple memory partitions.",
      "A method for encrypting memory contents."
    ],
    "correct_answer": "A technique used in memory management to combine small, non-contiguous free memory blocks into a single large block to alleviate external fragmentation.",
    "explanation": "Memory compaction involves moving occupied memory blocks around to consolidate all the free space into one large contiguous block. This is done to overcome external fragmentation and allow the allocation of larger memory chunks."
  },
  {
    "question": "What is the 'fetch-decode-execute cycle' (Instruction Cycle)?",
    "options": [
      "The sequence of steps a program takes to compile.",
      "The fundamental process by which a CPU fetches an instruction from memory, decodes it, and then executes it.",
      "The steps involved in booting up an operating system.",
      "The process of transferring data from an I/O device to memory."
    ],
    "correct_answer": "The fundamental process by which a CPU fetches an instruction from memory, decodes it, and then executes it.",
    "explanation": "The instruction cycle, also known as the fetch-decode-execute cycle, is the basic operation cycle of a computer. It is the process by which a computer retrieves a program instruction from its memory, determines what actions the instruction requires, and carries out those actions."
  },
  {
    "question": "What is the primary role of the 'Interrupt Controller' hardware?",
    "options": [
      "To generate interrupt signals for devices.",
      "To manage and prioritize interrupt requests from various devices before passing them to the CPU.",
      "To store interrupt service routines.",
      "To disable all interrupts in the system."
    ],
    "correct_answer": "To manage and prioritize interrupt requests from various devices before passing them to the CPU.",
    "explanation": "An interrupt controller (e.g., Programmable Interrupt Controller - PIC) is a hardware component that receives interrupt requests from multiple I/O devices, manages their priority, and then sends a single interrupt signal to the CPU, along with information about the interrupting device."
  },
  {
    "question": "What is 'Segmentation Fault' (Segfault)?",
    "options": [
      "An error caused by a network connection failure.",
      "An error that occurs when a program attempts to access a memory location that it is not allowed to access, or tries to access memory in a way that is not allowed.",
      "A bug in the operating system's kernel.",
      "An error related to hard disk partitions."
    ],
    "correct_answer": "An error that occurs when a program attempts to access a memory location that it is not allowed to access, or tries to access memory in a way that is not allowed.",
    "explanation": "A segmentation fault (segfault) is a common error in programs, especially those written in C or C++, that occurs when a program tries to access a memory location outside of its allocated memory segments or attempts an illegal memory operation."
  },
  {
    "question": "What is 'System Monitoring' in operating systems?",
    "options": [
      "The process of installing new software.",
      "The activity of observing and analyzing the performance and behavior of a computer system and its components (CPU, memory, disk, network).",
      "The process of backing up system files.",
      "The act of securing the system against malware."
    ],
    "correct_answer": "The activity of observing and analyzing the performance and behavior of a computer system and its components (CPU, memory, disk, network).",
    "explanation": "System monitoring involves continuously tracking various metrics related to the computer's hardware and software performance. This helps in identifying bottlenecks, troubleshooting issues, and optimizing resource utilization."
  },
  {
    "question": "What is the purpose of the 'head' command in Linux?",
    "options": [
      "To display the last few lines of a file.",
      "To display the first few lines of a file.",
      "To count the number of characters in a file.",
      "To search for specific text within a file."
    ],
    "correct_answer": "To display the first few lines of a file.",
    "explanation": "The `head` command is used to display the beginning (the 'head') of a text file, by default the first 10 lines."
  },
  {
    "question": "What is the primary role of the 'Arithmetic Logic Unit (ALU)' in a CPU?",
    "options": [
      "To manage input and output operations.",
      "To store data temporarily.",
      "To perform all arithmetic (e.g., addition, subtraction) and logical (e.g., AND, OR, NOT) operations.",
      "To control the sequence of operations."
    ],
    "correct_answer": "To perform all arithmetic (e.g., addition, subtraction) and logical (e.g., AND, OR, NOT) operations.",
    "explanation": "The ALU is the digital circuit within the processor that performs integer arithmetic and logical operations."
  },
  {
    "question": "What is 'Firmware'?",
    "options": [
      "Software that controls network connections.",
      "Software that provides a graphical user interface.",
      "A specific class of computer software that provides the low-level control for a device's specific hardware, often stored in non-volatile memory.",
      "Software used for application development."
    ],
    "correct_answer": "A specific class of computer software that provides the low-level control for a device's specific hardware, often stored in non-volatile memory.",
    "explanation": "Firmware is a permanent software program that is embedded into a hardware device. It provides the essential instructions for the hardware to operate and communicate with other devices and the operating system (e.g., BIOS, router firmware)."
  },
  {
    "question": "What is the purpose of 'Relative Paths' in the Linux file system?",
    "options": [
      "To always start from the root directory.",
      "To specify a file or directory's location relative to the current working directory.",
      "To provide a shorter name for frequently accessed files.",
      "To link files across different file systems."
    ],
    "correct_answer": "To specify a file or directory's location relative to the current working directory.",
    "explanation": "Relative paths are used to locate files or directories starting from the current directory, rather than from the root directory (`/`). This makes commands more concise when operating within the same branch of the file system."
  },
  {
    "question": "What is a 'Zombie Process' in UNIX?",
    "options": [
      "A process that is stuck in an infinite loop.",
      "A process that has completed its execution but its entry is still in the process table, waiting for its parent to read its exit status.",
      "A process that has been suspended by the operating system.",
      "A process that is running in the background without a controlling terminal."
    ],
    "correct_answer": "A process that has completed its execution but its entry is still in the process table, waiting for its parent to read its exit status.",
    "explanation": "A zombie process is a process that has finished its execution but still has an entry in the process table because its parent process has not yet called `wait()` or `waitpid()` to retrieve its exit status. It consumes minimal system resources but its process ID is still occupied."
  }
];

}

export function SetF(){
return[
  {
    "question": "What is the function of the 'wc' command in Linux?",
    "options": [
      "To count the number of characters in a file.",
      "To count the number of words, lines, and bytes in files.",
      "To count the number of directories in a given path.",
      "To count the number of processes running on the system."
    ],
    "correct_answer": "To count the number of words, lines, and bytes in files.",
    "explanation": "The `wc` command (word count) is used to count the number of lines, words, and characters (or bytes) in text files or standard input."
  },
  {
    "question": "What is the primary characteristic of 'Multitasking Operating Systems'?",
    "options": [
      "They allow only one program to run at a time.",
      "They enable a single CPU to appear to run multiple tasks or programs concurrently by rapidly switching between them.",
      "They are designed exclusively for real-time applications.",
      "They require multiple CPUs to function."
    ],
    "correct_answer": "They enable a single CPU to appear to run multiple tasks or programs concurrently by rapidly switching between them.",
    "explanation": "Multitasking operating systems provide the capability for a user to run multiple applications or tasks seemingly at the same time on a single processor by rapidly context-switching between them."
  },
  {
    "question": "What is the main purpose of 'Disk Formatting'?",
    "options": [
      "To create physical partitions on a hard drive.",
      "To prepare a storage device (like a hard disk or USB drive) for initial use by establishing a file system structure.",
      "To optimize the speed of data transfer to and from the disk.",
      "To repair bad sectors on a disk."
    ],
    "correct_answer": "To prepare a storage device (like a hard disk or USB drive) for initial use by establishing a file system structure.",
    "explanation": "Disk formatting is the process of preparing a data storage device for initial use. It typically involves dividing the disk into partitions and creating a file system on those partitions, which allows the operating system to store and retrieve files."
  },
  {
    "question": "How do 'Programmed I/O' operations typically work?",
    "options": [
      "The I/O device directly transfers data to memory without CPU intervention.",
      "The CPU continuously checks the status of the I/O device until it is ready for data transfer.",
      "The I/O device sends an interrupt to the CPU when it's ready.",
      "Data is transferred in fixed blocks using a dedicated controller."
    ],
    "correct_answer": "The CPU continuously checks the status of the I/O device until it is ready for data transfer.",
    "explanation": "In programmed I/O, the CPU is entirely responsible for controlling the I/O operations. It initiates a data transfer and then continuously polls (checks) the status of the I/O module until the operation is complete. This method wastes CPU cycles in waiting."
  },
  {
    "question": "What is the 'root account' in Linux?",
    "options": [
      "A standard user account with limited privileges.",
      "A special user account with superuser privileges, having full control over the system.",
      "An account exclusively for network administrators.",
      "An account used only for system logging."
    ],
    "correct_answer": "A special user account with superuser privileges, having full control over the system.",
    "explanation": "The root account in Linux (often referred to as the 'superuser') has the highest level of privileges and can perform any operation on the system, including modifying system files, installing software, and managing other user accounts."
  },
  {
    "question": "What is the difference between 'UNIX' and 'Windows' based operating systems in terms of philosophy?",
    "options": [
      "UNIX is proprietary, Windows is open-source.",
      "UNIX is command-line centric and modular, Windows is more GUI-centric and integrated.",
      "UNIX is designed for single-user systems, Windows for multi-user systems.",
      "UNIX supports only Intel processors, Windows supports all."
    ],
    "correct_answer": "UNIX is command-line centric and modular, Windows is more GUI-centric and integrated.",
    "explanation": "UNIX-like systems (including Linux) emphasize a command-line interface, modular design (small tools doing one thing well), and a powerful file system. Windows focuses on a graphical user interface and an integrated ecosystem of applications and services."
  },
  {
    "question": "What is the 'Time Slice' or 'Quantum' in CPU scheduling?",
    "options": [
      "The total time a process runs before completion.",
      "The maximum time a process is allowed to run before being preempted by the scheduler to give other processes a chance.",
      "The time it takes for a context switch to occur.",
      "The time interval between two consecutive interrupts."
    ],
    "correct_answer": "The maximum time a process is allowed to run before being preempted by the scheduler to give other processes a chance.",
    "explanation": "In time-sharing and round-robin scheduling, the time slice (or quantum) is a small unit of time that the CPU scheduler allocates to each process. After this time expires, the process is preempted, and another process gets the CPU."
  },
  {
    "question": "What is a 'Page Fault' in virtual memory?",
    "options": [
      "An error caused by incorrect memory allocation.",
      "An event that occurs when a program tries to access a page of memory that is currently not in main memory but is in virtual memory (on disk).",
      "A hardware error indicating a faulty memory chip.",
      "A security breach in memory access."
    ],
    "correct_answer": "An event that occurs when a program tries to access a page of memory that is currently not in main memory but is in virtual memory (on disk).",
    "explanation": "A page fault is an interrupt that occurs when a program attempts to access a memory page that is logically mapped into its address space but is not physically present in RAM. The OS then retrieves the page from disk."
  },
  {
    "question": "What is the primary function of the 'cd' command in Linux?",
    "options": [
      "To copy files.",
      "To create directories.",
      "To change the current working directory.",
      "To delete files."
    ],
    "correct_answer": "To change the current working directory.",
    "explanation": "The `cd` command (change directory) is used to navigate the file system hierarchy, allowing the user to move from one directory to another."
  },
  {
    "question": "What does 'Volatile Memory' mean?",
    "options": [
      "Memory that retains its data even when power is removed.",
      "Memory that loses its contents when power is removed.",
      "Memory that can only be read, not written to.",
      "Memory that is slower than non-volatile memory."
    ],
    "correct_answer": "Memory that loses its contents when power is removed.",
    "explanation": "Volatile memory requires power to maintain the stored information. Most RAM used in computers is volatile memory (e.g., DRAM). When the computer is turned off, the contents of volatile memory are lost."
  },
  {
    "question": "What is the difference between a 'Command Interpreter' and a 'Shell' in UNIX?",
    "options": [
      "A command interpreter is a graphical interface, while a shell is text-based.",
      "A command interpreter is a program that reads and executes commands; a shell is a specific type of command interpreter commonly used in Unix-like systems.",
      "There is no difference; they are interchangeable terms.",
      "A command interpreter only processes shell scripts, while a shell executes commands directly."
    ],
    "correct_answer": "A command interpreter is a program that reads and executes commands; a shell is a specific type of command interpreter commonly used in Unix-like systems.",
    "explanation": "A command interpreter is a broader term for any program that reads and executes commands. A shell (like Bash, Zsh) is a specific type of command interpreter widely used in Unix and Linux, providing a command-line interface for user interaction with the operating system."
  },
  {
    "question": "What is 'Buffering' in the context of I/O operations?",
    "options": [
      "A technique for permanently storing data on a disk.",
      "A process of temporarily storing data in a buffer (a designated memory area) while it is being transferred between devices or between an application and a device.",
      "A method for compressing data during transmission.",
      "A type of memory used by the CPU for fast access."
    ],
    "correct_answer": "A process of temporarily storing data in a buffer (a designated memory area) while it is being transferred between devices or between an application and a device.",
    "explanation": "Buffering involves using a temporary storage area (buffer) in memory to hold data during I/O operations. This helps to match the speed differences between the CPU and I/O devices, improving efficiency."
  },
  {
    "question": "What is the main characteristic of 'Batch Operating Systems'?",
    "options": [
      "They allow immediate user interaction.",
      "They process jobs in batches, without direct user interaction, optimizing for throughput.",
      "They are designed for real-time processing with strict deadlines.",
      "They allow multiple users to share resources simultaneously."
    ],
    "correct_answer": "They process jobs in batches, without direct user interaction, optimizing for throughput.",
    "explanation": "Batch operating systems execute jobs in sequences (batches) without requiring user intervention during execution. All necessary data and commands for a job are prepared beforehand, and jobs are processed one after another or grouped together."
  },
  {
    "question": "What is the significance of the 'Interrupt Priority' system?",
    "options": [
      "It determines which process gets the CPU next based on its burst time.",
      "It ensures that critical interrupts (e.g., from hardware failures) are handled before less critical ones, even if they arrive later.",
      "It assigns priorities to user applications based on resource usage.",
      "It dictates the order in which data is transferred between memory and I/O devices."
    ],
    "correct_answer": "It ensures that critical interrupts (e.g., from hardware failures) are handled before less critical ones, even if they arrive later.",
    "explanation": "Interrupt priority systems are used to manage multiple simultaneous interrupts. Higher priority interrupts are given precedence and are serviced before lower priority ones, ensuring that time-critical events are handled promptly."
  },
  {
    "question": "What is the purpose of 'Relative Addressing Mode'?",
    "options": [
      "The operand's address is directly specified in the instruction.",
      "The operand's address is found in a register.",
      "The effective address of the operand is obtained by adding the address part of the instruction to the content of the program counter (PC).",
      "The instruction contains the actual operand value."
    ],
    "correct_answer": "The effective address of the operand is obtained by adding the address part of the instruction to the content of the program counter (PC).",
    "explanation": "In relative addressing mode, the address of the operand is calculated by adding a displacement (offset) specified in the instruction to the current value of the Program Counter (PC). This is useful for writing position-independent code."
  },
  {
    "question": "What is the primary role of the 'Processor Status Register' (PSR) or 'Flags Register'?",
    "options": [
      "To store general-purpose data values.",
      "To hold the address of the next instruction.",
      "To store status bits (flags) that reflect the outcome of arithmetic and logical operations and control CPU behavior.",
      "To store the instruction being executed."
    ],
    "correct_answer": "To store status bits (flags) that reflect the outcome of arithmetic and logical operations and control CPU behavior.",
    "explanation": "The Processor Status Register (PSR), also known as the Flags Register or Status Register, contains a collection of individual bits (flags) that indicate various conditions resulting from CPU operations (e.g., zero result, carry, overflow, sign)."
  },
  {
    "question": "What is a 'File System' in an operating system?",
    "options": [
      "A physical storage device like a hard drive.",
      "A method by which files are named and organized on storage media, and how they are accessed and managed by the operating system.",
      "A database that stores user account information.",
      "A collection of hardware components that interact with files."
    ],
    "correct_answer": "A method by which files are named and organized on storage media, and how they are accessed and managed by the operating system.",
    "explanation": "A file system is a method and data structure that an operating system uses to control how data is stored and retrieved. Without a file system, information placed on a storage medium would be one large block of data with no way to tell where one piece of information stops and the next begins."
  },
  {
    "question": "What is the main function of 'Registers' in a CPU?",
    "options": [
      "To store large amounts of data permanently.",
      "To provide small, high-speed storage locations within the CPU for temporary data, instructions, and addresses during processing.",
      "To manage external I/O devices.",
      "To connect the CPU to main memory."
    ],
    "correct_answer": "To provide small, high-speed storage locations within the CPU for temporary data, instructions, and addresses during processing.",
    "explanation": "Registers are small, very fast storage locations located directly within the CPU. They are used to hold data, instructions, and addresses that the CPU is currently working with, providing immediate access for operations."
  },
  {
    "question": "What is 'Memory Compaction' (or Defragmentation)?",
    "options": [
      "A method for compressing data in memory.",
      "A technique used in memory management to combine small, non-contiguous free memory blocks into a single large block to alleviate external fragmentation.",
      "A process of creating multiple memory partitions.",
      "A method for encrypting memory contents."
    ],
    "correct_answer": "A technique used in memory management to combine small, non-contiguous free memory blocks into a single large block to alleviate external fragmentation.",
    "explanation": "Memory compaction involves moving occupied memory blocks around to consolidate all the free space into one large contiguous block. This is done to overcome external fragmentation and allow the allocation of larger memory chunks."
  },
  {
    "question": "What is the 'fetch-decode-execute cycle' (Instruction Cycle)?",
    "options": [
      "The sequence of steps a program takes to compile.",
      "The fundamental process by which a CPU fetches an instruction from memory, decodes it, and then executes it.",
      "The steps involved in booting up an operating system.",
      "The process of transferring data from an I/O device to memory."
    ],
    "correct_answer": "The fundamental process by which a CPU fetches an instruction from memory, decodes it, and then executes it.",
    "explanation": "The instruction cycle, also known as the fetch-decode-execute cycle, is the basic operation cycle of a computer. It is the process by which a computer retrieves a program instruction from its memory, determines what actions the instruction requires, and carries out those actions."
  },
  {
    "question": "What is the primary role of the 'Interrupt Controller' hardware?",
    "options": [
      "To generate interrupt signals for devices.",
      "To manage and prioritize interrupt requests from various devices before passing them to the CPU.",
      "To store interrupt service routines.",
      "To disable all interrupts in the system."
    ],
    "correct_answer": "To manage and prioritize interrupt requests from various devices before passing them to the CPU.",
    "explanation": "An interrupt controller (e.g., Programmable Interrupt Controller - PIC) is a hardware component that receives interrupt requests from multiple I/O devices, manages their priority, and then sends a single interrupt signal to the CPU, along with information about the interrupting device."
  },
  {
    "question": "What is 'Segmentation Fault' (Segfault)?",
    "options": [
      "An error caused by a network connection failure.",
      "An error that occurs when a program attempts to access a memory location that it is not allowed to access, or tries to access memory in a way that is not allowed.",
      "A bug in the operating system's kernel.",
      "An error related to hard disk partitions."
    ],
    "correct_answer": "An error that occurs when a program attempts to access a memory location that it is not allowed to access, or tries to access memory in a way that is not allowed.",
    "explanation": "A segmentation fault (segfault) is a common error in programs, especially those written in C or C++, that occurs when a program tries to access a memory location outside of its allocated memory segments or attempts an illegal memory operation."
  },
  {
    "question": "What is 'System Monitoring' in operating systems?",
    "options": [
      "The process of installing new software.",
      "The activity of observing and analyzing the performance and behavior of a computer system and its components (CPU, memory, disk, network).",
      "The process of backing up system files.",
      "The act of securing the system against malware."
    ],
    "correct_answer": "The activity of observing and analyzing the performance and behavior of a computer system and its components (CPU, memory, disk, network).",
    "explanation": "System monitoring involves continuously tracking various metrics related to the computer's hardware and software performance. This helps in identifying bottlenecks, troubleshooting issues, and optimizing resource utilization."
  },
  {
    "question": "What is the purpose of the 'head' command in Linux?",
    "options": [
      "To display the last few lines of a file.",
      "To display the first few lines of a file.",
      "To count the number of characters in a file.",
      "To search for specific text within a file."
    ],
    "correct_answer": "To display the first few lines of a file.",
    "explanation": "The `head` command is used to display the beginning (the 'head') of a text file, by default the first 10 lines."
  },
  {
    "question": "What is the primary role of the 'Arithmetic Logic Unit (ALU)' in a CPU?",
    "options": [
      "To manage input and output operations.",
      "To store data temporarily.",
      "To perform all arithmetic (e.g., addition, subtraction) and logical (e.g., AND, OR, NOT) operations.",
      "To control the sequence of operations."
    ],
    "correct_answer": "To perform all arithmetic (e.g., addition, subtraction) and logical (e.g., AND, OR, NOT) operations.",
    "explanation": "The ALU is the digital circuit within the processor that performs integer arithmetic and logical operations."
  },
  {
    "question": "What is 'Firmware'?",
    "options": [
      "Software that controls network connections.",
      "Software that provides a graphical user interface.",
      "A specific class of computer software that provides the low-level control for a device's specific hardware, often stored in non-volatile memory.",
      "Software used for application development."
    ],
    "correct_answer": "A specific class of computer software that provides the low-level control for a device's specific hardware, often stored in non-volatile memory.",
    "explanation": "Firmware is a permanent software program that is embedded into a hardware device. It provides the essential instructions for the hardware to operate and communicate with other devices and the operating system (e.g., BIOS, router firmware)."
  },
  {
    "question": "What is the purpose of 'Relative Paths' in the Linux file system?",
    "options": [
      "To always start from the root directory.",
      "To specify a file or directory's location relative to the current working directory.",
      "To provide a shorter name for frequently accessed files.",
      "To link files across different file systems."
    ],
    "correct_answer": "To specify a file or directory's location relative to the current working directory.",
    "explanation": "Relative paths are used to locate files or directories starting from the current directory, rather than from the root directory (`/`). This makes commands more concise when operating within the same branch of the file system."
  },
  {
    "question": "What is a 'Zombie Process' in UNIX?",
    "options": [
      "A process that is stuck in an infinite loop.",
      "A process that has completed its execution but its entry is still in the process table, waiting for its parent to read its exit status.",
      "A process that has been suspended by the operating system.",
      "A process that is running in the background without a controlling terminal."
    ],
    "correct_answer": "A process that has completed its execution but its entry is still in the process table, waiting for its parent to read its exit status.",
    "explanation": "A zombie process is a process that has finished its execution but still has an entry in the process table because its parent process has not yet called `wait()` or `waitpid()` to retrieve its exit status. It consumes minimal system resources but its process ID is still occupied."
  }
];

}