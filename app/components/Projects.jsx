import "./Card"
import Card from "./Card";
import image from "./Images/image.jpg"

const Projects = () => {
   
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        <Card
         img="https://picsum.photos/seed/picsum/200/300"
         title="HI Hello"
         descript="Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'."
        />
        <Card
         img="https://picsum.photos/seed/picsum/200/300"
         title="HI Hello"
         descript="Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'."
        />
        <Card
         img="https://picsum.photos/seed/picsum/200/300"
         title="HI Hello"
         descript="Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'."
        />
        <Card
         img="https://picsum.photos/seed/picsum/200/300"
         title="HI Hello"
         descript="Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'."
        />
        <Card
         img="https://picsum.photos/seed/picsum/200/300"
         title="HI Hello"
         descript="Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run 'Import-Module PSReadLine'."
        />

      </div>
    );
  };
  
  export default Projects;