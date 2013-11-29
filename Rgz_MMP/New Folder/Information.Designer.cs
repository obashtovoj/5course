namespace VideoWinForms
{
    partial class Information
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.teFileName = new System.Windows.Forms.TextBox();
            this.teDuration = new System.Windows.Forms.TextBox();
            this.teBitrate = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.teVideo = new System.Windows.Forms.RichTextBox();
            this.teAudio = new System.Windows.Forms.RichTextBox();
            this.SuspendLayout();
            // 
            // teFileName
            // 
            this.teFileName.Location = new System.Drawing.Point(94, 12);
            this.teFileName.Name = "teFileName";
            this.teFileName.ReadOnly = true;
            this.teFileName.Size = new System.Drawing.Size(374, 20);
            this.teFileName.TabIndex = 0;
            // 
            // teDuration
            // 
            this.teDuration.Location = new System.Drawing.Point(94, 38);
            this.teDuration.Name = "teDuration";
            this.teDuration.ReadOnly = true;
            this.teDuration.Size = new System.Drawing.Size(374, 20);
            this.teDuration.TabIndex = 1;
            // 
            // teBitrate
            // 
            this.teBitrate.Location = new System.Drawing.Point(94, 64);
            this.teBitrate.Name = "teBitrate";
            this.teBitrate.ReadOnly = true;
            this.teBitrate.Size = new System.Drawing.Size(374, 20);
            this.teBitrate.TabIndex = 2;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 15);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(36, 13);
            this.label1.TabIndex = 5;
            this.label1.Text = "Файл";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(12, 41);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(80, 13);
            this.label2.TabIndex = 6;
            this.label2.Text = "Длительность";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(12, 67);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(48, 13);
            this.label3.TabIndex = 7;
            this.label3.Text = "Битрейт";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(12, 93);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(37, 13);
            this.label4.TabIndex = 8;
            this.label4.Text = "Аудио";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(10, 171);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(38, 13);
            this.label5.TabIndex = 9;
            this.label5.Text = "Видео";
            // 
            // teVideo
            // 
            this.teVideo.Location = new System.Drawing.Point(94, 168);
            this.teVideo.Name = "teVideo";
            this.teVideo.ReadOnly = true;
            this.teVideo.Size = new System.Drawing.Size(374, 72);
            this.teVideo.TabIndex = 10;
            this.teVideo.Text = "";
            // 
            // teAudio
            // 
            this.teAudio.Location = new System.Drawing.Point(94, 90);
            this.teAudio.Name = "teAudio";
            this.teAudio.ReadOnly = true;
            this.teAudio.Size = new System.Drawing.Size(374, 72);
            this.teAudio.TabIndex = 11;
            this.teAudio.Text = "";
            // 
            // Information
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(480, 275);
            this.Controls.Add(this.teAudio);
            this.Controls.Add(this.teVideo);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.teBitrate);
            this.Controls.Add(this.teDuration);
            this.Controls.Add(this.teFileName);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "Information";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Информация";
            this.Load += new System.EventHandler(this.Information_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox teFileName;
        private System.Windows.Forms.TextBox teDuration;
        private System.Windows.Forms.TextBox teBitrate;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.RichTextBox teVideo;
        private System.Windows.Forms.RichTextBox teAudio;
    }
}