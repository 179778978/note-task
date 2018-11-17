<?php
use yii\helpers\Html;
$this->title = "图书管理系统";

?>
<div class="container">
    <h1><?= Html::encode($this->title) ?></h1>
    <div class="column" style="display:flex;flex-direction:row">
        <p style="margin-right:5px">
            <?= Html::a('查询', ['check'], ['class' => 'btn btn-info']) ?>
        </p>
        <p>
            <?= Html::a('增加', ['create'], ['class' => 'btn btn-success']) ?>
        </p>
    </div>
    <div class="table-responsive">
    <table class="table table-striped table-bordered table-condesed" border='1'>
    <thead>
    <tr>
        <th>id</th>
        <th>图书名字</th>
        <th>作者</th>
        <th>出版社</th>
        <th>出版日期</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody>
        <?php foreach ($books as $book): ?>
            <tr class="info">
            <th>
                <?= Html::encode("{$book->id}") ?>
            </th>
            <th>
                <?= Html::encode("{$book->name}") ?>
            </th>
            <th>
                <?= Html::encode("{$book->author}") ?>
            </th>
            <th>
                <?= Html::encode("{$book->process}") ?>
            </th>
            <th>
                <?= Html::encode("{$book->publictime}") ?>
            </th>
            <th>
            <p>
                <?= Html::a('删除', ['delete', 'id' => $book->id], [
                    'class' => 'btn btn-danger',
                    'data' => [
                        'confirm' => '确实要删除这条记录吗?',
                        'method' => 'post',
                    ],
                ]) ?>
            </p>

            </th>
            </tr>
        <?php endforeach; ?>
    </tbody>
    </table>
    </div>
    
</div>