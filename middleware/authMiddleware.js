

/*Un middleware d'authentification (ou authmiddleware) est un composant utilisé 
dans les applications web pour gérer l'authentification des utilisateurs. 
Voici un aperçu de ses rôles et fonctions principaux :

Vérification des identifiants :

Il vérifie si les identifiants (comme les jetons JWT, les cookies de session, etc.) 
présents dans les requêtes des utilisateurs sont valides.
Contrôle d'accès :

Il détermine si l'utilisateur a les autorisations nécessaires pour accéder à une ressource ou effectuer une action particulière.
Protection des routes :

Il protège les routes sensibles en permettant seulement aux utilisateurs authentifiés ou autorisés d'y accéder.
Gestion des erreurs d'authentification :

Il renvoie des erreurs appropriées (comme 401 Unauthorized ou 403 Forbidden) 
lorsque l'utilisateur n'est pas authentifié ou n'a pas les autorisations requises. */

// this is userauthMiddleware

const jwt = require ("jsonwebtoken") // need jwt to create authmiddleware


//creation authmiddleware

const authMiddleware = async (req,res,next)=>{

    try{
        const token= req.headers.token 
        if(!token) res.status(401).json({msg:"your are not authorized as token!"})

            else{
                const verifytoken = await jwt.verify(token,process.env.JWT_SECRET_KEY)
                if(!verifytoken) res.status(401).json({msg:"your are not authorized in verification !"})

                    else{
                        req.body.userId=verifytoken.id  // every user will get a token 

                        next()
                    }

            }
    }
    catch(err){
        res.status(400).json({msg:"something went wrong !", err:err.message})
    
    }
}

module.exports = authMiddleware
