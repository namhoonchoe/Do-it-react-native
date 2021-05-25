import {Router} from 'express'
import path from 'path'
import multer from 'multer'
import * as U from '../utils'
import {IJWTDecoded} from './IJWTDecoded'
import {getPublicDir} from '../config'

const upload = multer({dest: 'uploads/'})

export type UploadFileType = Express.Multer.File

export const uploadFilesRouter = (ip: string, port: number) => {
  const router = Router()
  return router.use(upload.any()).post('/', async (req, res) => {
    // JWT에서 decoded 정보를 얻습니다.
    const {authorization} = req.headers || {}
    if (!authorization) {
      res.status(401).json({success: false, message: 'no jwt'})
      return
    }

    const jwt = authorization.split(' ')[1]
    //console.log(jwt)
    if (!jwt || jwt.length < 1) {
      res.status(401).json({success: false, message: 'no jwt'})
      return
    }

    const decoded = await U.jwtVerify<IJWTDecoded>(jwt)
    //console.log(decoded)
    // 올린 파일을 public 디렉터리로 파일 이름을 랜덤하게 바꿔 이동합니다.
    const files = req.files

    const renamePromises = (files as UploadFileType[]).map((file) => {
      const {originalname, destination, path: filepath} = file

      return U.moveFile(
        filepath,
        path.join(getPublicDir(), U.makeRandomFileName(originalname))
      )
    })

    const result = await Promise.all(renamePromises)

    // 업로더의 이름과 public 디렉터리로 이동한 파일 경로(uri)를 응답합니다.
    const uris = result.map((destpath) => ({
      uri: `http://${ip}:${port}/${destpath}`
    }))
    // console.log('uris', uris)
    res.json({...decoded, ...uris[0]})
  })
}
