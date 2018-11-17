<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
$this->title = '增加图书';
?>
<div class="container">
    <h1><?= Html::encode($this->title) ?></h1>
    <div class="form-inline"></div>
    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'author')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'process')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'publictime')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>


</div>
