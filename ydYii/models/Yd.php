<?php

namespace app\models;

use Yii;
use yii\db\ActiveRecord;
use app\models\Book;
use yii\data\ActiveDataProvider;
use yii\data\Pagination;
class Yd extends Book{
       /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['name', 'author', 'process', 'publictime'], 'safe'],
        ];
    }


    public function getPagination($count){
        $pagination = new Pagination([
            'defaultPageSize' => 10,
            'totalCount' => $count,
        ]);
        return $pagination;
    }

    public function search($params)
    {
        echo $this->publictime;
        $query = self::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        // 从参数的数据中加载过滤条件，并验证
        if (!($this->load($params) && $this->validate())) {
            return $dataProvider;
        }
        // 增加过滤条件来调整查询对象
        $query->andFilterWhere(['id' => $this->id])
              ->andFilterWhere(['like' ,'name', $this->name])
              ->andFilterWhere(['like', 'author', $this->author])
              ->andFilterWhere(['like', 'process', $this->process]);
            //   ->addFliterWhere(['like','publictime',$this->publictime]);
              
        
        return $dataProvider;
    }

    public function sortQuery($query,$pagination){
        $books = $query->orderBy('id')
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();
        return $books;
    }
}