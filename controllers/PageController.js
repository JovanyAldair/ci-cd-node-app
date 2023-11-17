exports.getHomePage = (req, res) =>{
    const viewsData = {
        titulo: 'Universo Femenino - Home'
    }
    res.render('home', viewsData)
}

exports.getAboutPage = (req, res) =>{
    const viewsData = {
        titulo: 'Universo Femenino - Sobre Nós'
    }
    res.render('sobre', viewsData)
}

exports.getCommunityPage = (req, res) =>{
    const viewsData ={
        titulo: 'Cadastrar-se na Nossa Comunidade'
    }
    res.render('comunidade', viewsData)
}