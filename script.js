async function telechargerPDF() {
    const { jsPDF } = window.jspdf;

    // Récupère le bouton pour le cacher temporairement
    const bouton = document.getElementById('telecharger');
    const couleur = document.getElementById('clr');

    // Cache le bouton avant la capture
    bouton.style.visibility = 'hidden';
    couleur.style.visibility = 'hidden';

    // document.querySelectorAll('img').forEach(img => {
    //     if (!img.src.startsWith(window.location.origin)) {
    //       img.style.display = 'none'; // ou remplacer l'image
    //     }
    //   });

    // html2canvas(document.body, {
    //     useCORS: true
    //   })
    //   .then(canvas => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF({
    //       orientation: 'portrait',
    //       unit: 'px',
    //       format: [canvas.width, canvas.height]
    //     });
    //     pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    //     pdf.save('cv.pdf');
    //   });

   // Capturer le reste de la page sans le bouton
    html2canvas(document.body).then(canvas => {
       
        const imgData = canvas.toDataURL('image/png');

        // Crée le PDF avec les dimensions exactes de la page capturée
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });

        // Ajoute l'image au PDF
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

        // Affiche à nouveau le bouton après la capture
        bouton.style.visibility = 'visible';
        couleur.style.visibility = 'visible';

        // Télécharge automatiquement le PDF nommé "page.pdf"
        pdf.save('cv.pdf');
    });
}

function generatePDF() {
    
    // Récupère le bouton pour le cacher temporairement
    const bouton = document.getElementById('telecharger');
    const couleur = document.getElementById('clr');
    html2pdf().from(document.body).save('cv.pdf')

    // Affiche à nouveau le bouton après la capture
    bouton.style.visibility = 'visible';
    couleur.style.visibility = 'visible';


}

// function generatePDF() {
//     let pdf = new jsPDF("p", "pt", "a4") ;
//     let options = { pagesplit : true } ;
  
//     pdf.addHTML($("body"), options, () => {
//       pdf.save("cv.pdf") ;
//     }) ;
//   }
  
  
//   generatePDF() ;

function changeBgCouleur(couleur){
    // Change la couleur de la variable --bg-couleur dans la racine :root de la page
    document.documentElement.style.setProperty('--bg-couleur', couleur);
    // Change la couleur de fond du bouton
    document.getElementById('telecharger').style.backgroundColor = couleur;
}
