using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace VideoWinForms
{
    public partial class Information : Form
    {
        string _filePath;
        public Information(string filePath)
        {
            InitializeComponent();
            _filePath = filePath;
        }

        private void Information_Load(object sender, EventArgs e)
        {
            var mediaInfo = Media.GetInfo(_filePath);
            teAudio.Text = Media.AudioInfo(mediaInfo);
            teBitrate.Text = Media.BitrateInfo(mediaInfo);
            teDuration.Text = Media.DurationInfo(mediaInfo);
            teFileName.Text = _filePath;
            teVideo.Text = Media.VideoInfo(mediaInfo);
        }
    }
}
