## Installing Python paths (Optional for Mac users)

If you want to work on your local device and have an Apple Mac computer you will need to install Python 3. By default, an Apple Mac has Python installed with version 2.7. You can verify this by opening up a terminal and running the following command:
```
python --version
```
For the lessons in this course, you will need Python 3.

Before you can install Python you will need to install a few dependencies.  These are 'XCode' and' brew'.  You will find details of these in the "Required dependencies" reading. Mac has a few different ways to do installations but the most common way is to use the package manager called 'brew' to handle installations.

Once the dependencies are installed you can begin to install Python. Run the following command:
```
brew install python
```
When you install Python via brew it will install version 3.x. To verify that you have both versions installed run the following:
```
python --version

python3 --version
```
To reduce confusion you need to set the paths to point to the brew install of python3. First, let's figure out where it was installed by the package manager brew. Run the following command:
```
brew info python
```
The section you are interested in is the location of where it was installed.

Unversioned symlinks `python`, `python-config`, `pip` etc. pointing to `python3`, `python3-config`, `pip3` etc., respectively, have been installed into `/opt/homebrew/opt/python@3.9/libexec/bin`

The `/opt/homebrew/opt/python@3.x/libexec/bin` is the one you want to use and set for your path. Copy it from the terminal. Depending on the version of Mac OS you are running the next steps may vary slightly.

### Zsh
```
vim ~/.zshrc
```

### Bash
```
vim ~/.bashrc
```

Vim is a text editor and allows you to make changes to files directly from the shell. To make the edits:

1. Press the "I" key on your keyboard.
2.  Add the following line and remember to replace 3.x with the Python version that was installed on your system:
```
shell PATH="/opt/homebrew/opt/python@3.x/libexec/bin:${PATH}"
```
3. Press the esc key to exit from insert mode.

4. Hold down the shift key and press the colon key represented by : & ;

5. Type wq! and then hit Enter to exit vim.

6. Run the following:

Zsh `shell source ~/.zshrc`

Bash `shell source ~/.bashrc`

7. To verify everything is working as you would expect, run the following:
```
shell python --version Python 3.9.10
```
8. You should see the output similar to the above depending on your install version.


## Required dependencies
To install brew, you need to install Xcode first. Homebrew does not come with its own compiler and it needs Xcode installed for it to work correctly. To install Xcode do the following:

1. Open a terminal.

2. Run the following:
`shell xcode-select --install`

3. A popup will appear asking you to confirm the installation. Click on the Install button.

4. Agree to the license agreement.

### brew
Macs do not come with package managers like most Linux distributions. To make up for this an external tool called brew was created. To install brew, do the following:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
