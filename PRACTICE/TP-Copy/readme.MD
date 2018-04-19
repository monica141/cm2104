# Travel Package (Temporary title)

Travel Package is a solution for people who have no time or just can't be bothered to organize their trips.
With this web app, you will be able to generate packages with all the information you need for your next holidays.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before doing anything, please make sure you have the following:
* [Git bash](https://git-scm.com/)
* [Atom](https://atom.io/)
* [Codio](https://codio.com/p/login)
* [GitHub project](https://github.com/sergiocast-97/TravelPackage)
* [Brain](https://en.wikipedia.org/wiki/Human_brain)

### Installing

A step by step series of examples that tell you have to get a development environment running

Once you have installed Atom and Git in your computer (Just say yes to everything even if that implies selling your soul), open Atom, Git Bash and have the project in a tab.
Open the folder where you want your project to be, and access that folder through bash.
Let's say my project is in D:\web\coursework. My bash commands would be the following:
(Please be aware that if your folders have spaces, git bash will behave funny and won't recognize the folders. This should be solved by typing "\" before the space, but sometimes it won't work. In that case, type the first couple letters of the folder and click tab. This should get you inside the folder.)
```
cd D:\web\coursework
```
Once you are in your selected folder, go to your project tab and in the "Clone or download" button, copy the HTTPS URL.
Then, in git bash, type the following command.
```
git clone https://github.com/sergiocast-97/TravelPackage.git
```
After entering the command, you should be able to see the project files.
Open the folder in Atom, and start coding!

## Pushing and pulling

PLEASE, pull every time you want to work in the project.
First, please open the GitHub panel in Atom.
```
Ctrl + Shift + 8
Ctrl + Shift + 9
```
To pull or the changes, in the right down corner you will see two arrows.
Click that button, and you will see the pull and push buttons.

To push, the process is a wee bit more complex.
If you have made some changes and you're proud of them, in the git panel, stage the files (Via the stage all button or by staging each file individually).
If you're not very proud of those changes, just discard them.

After that, commit the changes, adding a commit message to tell what it is you have coded.

Once you have proudly committed your changes, just push the changes and let us know for us to pull them.

If there are collisions of changes (There shouldn't be because we should all know what we are working on and SHOULD NOT be working on the same file), just have a thought about which changes are better and keep them by deleting the other useless piece of... code.

## Coding style

### Variables
Use camel case.
```
var numberOfPeople = 0;
```

### Brackets
Use K&R style.
```
testFunction(var test){
   // Code here
}
```

### Indentation
Please indent properly. Doing otherwise will result in death punishment. (I'm looking at you)
```
testFunction( var test){
   if( test ){
      while( test < 100 ){
         test ++;
      }
   } else {
      test = 0;
   }
   return test;
}
```

### Comments
Please comment as much as you can. Doing otherwise will result in death punishment. (I'm looking at you)
```
/*
 * This function does stuff
 */
testFunction( var test ){
   // This part does something
   alert( test );
}
```


## Deployment

Since we still haven't deployed this in a live server, I have no idea whatsoever about how to deploy this into a real server.
However, since we're using Codio as a server, just clone the project to your Codio with the clone command.
```
git clone https://github.com/sergiocast-97/TravelPackage.git
```
After that, access your folder by
```
cd Coursework
```
And finally, start your server by
```
http-server
```
## Built With

* [Milligram](https://milligram.io/) - A minimalist CSS framework

## Contributing

Contributions are only for those who are in the project. Please don't share it.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Sergio Castillo** - *Initial work* - [sergiocast-97](https://github.com/sergiocast-97)
* **Monica Dayalani** - *Initial work* - [monica141](https://github.com/monica141)
* **Satya Tamalampudi** - *Initial work* - [SatyaTamalampudi](https://github.com/SatyaTamalampudi)

See also the list of [contributors](https://github.com/sergiocast-97/TravelPackage/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Done with ❤ by Sergio
