<?php

namespace app\controllers;

use Yii;
use app\models\Book;
use yii\web\controller;
use yii\data\Pagination;
use app\models\Yd;

class YdController extends controller{
    public function actionIndex(){
        $query = Yd::find();
        $model = new Yd();
        $pagination =  $model->getPagination($query->count());

        // $books = $query->orderBy('id')
        //     ->offset($pagination->offset)
        //     ->limit($pagination->limit)
        //     ->all();
        $books = $model->sortQuery($query,$pagination);
        return $this->render('index', [
            'books' => $books,
            'pagination' => $pagination,
        ]);
    }


    public function actionDelete($id)
    {   
        $one = Yd::findone($id);
        if($one == null){
            return;
            
        }
        // $this->findModel($id)->delete();
        $one -> delete();
        return $this->redirect(['index']);
    }

    public function actionCreate(){
        $model = new Book();
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['index']);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    public function actionCheck(){
        $model = new Yd();
        return $this->render('check',[
            'model' => $model,
        ]);
    }


    public function actionValidate(){
        $model = new Yd();
        $data = $model->search(Yii::$app->request->queryParams);
        // print_r($data->query);
        $query = $data->query;
        $pagination =  $model->getPagination($query->count());
        $books = $model->sortQuery($query,$pagination);
         return $this->render('index', [
            'books' => $books,
            'pagination' => $pagination,
        ]);
    }


}